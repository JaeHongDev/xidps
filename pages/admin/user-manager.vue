<template>
  <div class='pt-5'>
    <custom-modal
      :is-show='visibleExcelModal'
      @button:click:close='visibleExcelModal=false'
      width='900' title='엑셀 업로드'>
      <user-excel-loader
        @button:click:save='importExcel'
      ></user-excel-loader>
    </custom-modal>

    <setting-division-value></setting-division-value>

    <data-grid-view

      class='mt-7'
      :headers='headers'
      :search-headers='searchHeaders'
      :rows='rows'
      :edit-groups='{
        useImportExcel:true
      }'

      title='사용자관리'
      selected-key='v_index'
      @button:add:click='handleInsertNew'
      @button:remove:click='handleRemoveRows'
      @button:save:click='handleSaveRows'
      @button:search:click='handleSearchRows'
      @button:import:click='visibleExcelModal=true'
    >
      <template v-slot:state-edit='{item,index}'>
        <td>{{item.v_index}}</td>
        <td>
          <v-text-field hide-details dense outlined v-model='editUser.name'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details dense outlined v-model='editUser.number'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details dense outlined v-model='editUser.position'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details dense outlined v-model='editUser.var1'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details dense outlined v-model='editUser.var2'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details dense outlined v-model='editUser.var3'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details dense outlined v-model='editUser.var4'></v-text-field>
        </td>
        <td>
          <v-btn @click='handleEditEnd(item)' icon>
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn @click='handleEditCancel(item)' icon>
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </td>
      </template>


      <template v-slot:state-basic='{item,index}'>
        <td>{{item.v_index}}</td>
        <td>{{item.name}}</td>
        <td>{{item.number}}</td>
        <td>{{item.position}}</td>
        <td>{{item.var1}}</td>
        <td>{{item.var2}}</td>
        <td>{{item.var3}}</td>
        <td>{{item.var4}}</td>
        <td>
          <v-btn @click='handleEditStart(item)' icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </template>
    </data-grid-view>
  </div>

</template>

<script>
export default {
  title: "user-manager",
  data() {
    return {
      rows: [],
      visibleExcelModal: false,
      headers: [
        {text: 'id', value: 'id', width: '100px', align: 'center', searchAble: true,},
        {text: '이름', value: 'name', width: '200px', align: 'center', searchAble: true,},
        {text: '연락처', value: 'number', width: '200px', align: 'center', searchAble: true,},
        {text: '구분값', value: 'position', width: '200px', align: 'center', searchAble: true,},
        {text: '변수1', value: 'var1', width: '200px', align: 'center', searchAble: true,},
        {text: '변수2', value: 'var2', width: '200px', align: 'center', searchAble: true,},
        {text: '변수3', value: 'var3', width: '200px', align: 'center', searchAble: true,},
        {text: '변수4', value: 'var4', width: '200px', align: 'center', searchAble: true,},
        {text: '관리', value: '', width: '150px', align: 'center', searchAble: false,},

      ],
      editUser: {},
      v_index: 0
    };
  },
  computed: {
    searchHeaders() {
      return this.headers.filter(header => header.searchAble);
    }
  },
  methods: {

    createDefault({id, name, number, position, var1, var2, var3, var4}) {
      return {
        editable: false,
        division: "INSERT",
        v_index: ++this.v_index,
        id: id ?? "",
        name: name ?? "",
        number: number ?? "",
        position: position ?? "",
        var1: var1 ?? "",
        var2: var2 ?? "",
        var3: var3 ?? "",
        var4: var4 ?? ""
      };
    },
    createEditDefault({name, number, position, var1, var2, var3, var4}) {
      return {
        name: name ?? "",
        number: number ?? "",
        position: position ?? "",
        var1: var1 ?? "",
        var2: var2 ?? "",
        var3: var3 ?? "",
        var4: var4 ?? ""
      };
    },

    findIndex(targetRow) {
      return this.rows.findIndex(row => row.v_index === targetRow.v_index);
    },
    handleInsertNew() {
      this.rows.unshift(this.createDefault({}));
    },
    handleEditStart(item) {
      if(this.validateEditingRow()) return ;
      item.editable = true;
      this.editUser = this.createEditDefault(Object.assign(item, {}));
    },
    handleEditEnd(row) {
      const index = this.findIndex(row);
      this.rows.splice(index, 1, {
        ...row,
        editable: false,
        division:"UPDATE",
        ...this.editUser
      });
    },
    handleEditCancel(row) {
      row.editable = false;
      this.editUser = this.createEditDefault({});
    },
    handleRemoveRows(indexes) {
      const selectedIndexes = indexes.reduce((pre, cur) => {
        if (this.rows[cur].division !== "INSERT") return [...pre, this.$store.getters["userManage/findByIndex"]({user:this.rows[cur]})]
        return pre;
      }, []);

      selectedIndexes.forEach(index => this.$store.commit("userManage/removeRow", index))
      indexes.forEach(index => this.rows.splice(index, 1));
    },

    handleSearchRows(payload) {
      this.rows = Object.assign(this.$store.getters["userManage/findByHeaderName"](payload), {});
    },
    handleSaveRows() {
      if (this.validateEditingRow()) return;
      const changedRows = this.rows.filter(row => row.division !== "SELECT");
      this.$store.dispatch("userManage/saveRows", {
        rows: changedRows
      });

      changedRows.forEach(row => {
        this.rows.splice(this.findIndex(row), 1, {
          ...row,
          division: "SELECT"
        })
      })
    },
    validateEditingRow() {
      return this.rows.some((row, index) => {
        if (row.editable) {
          alert(`${index + 1}행이 편집중입니다`);
          return true;
        }
      });
    },
    importExcel(payload) {
      this.rows.unshift(...payload.rows.map(row => this.createDefault(row)));
      this.visibleExcelModal = false;
    }
  }
};
</script>

