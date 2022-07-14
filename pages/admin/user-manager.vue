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
    <data-grid-view
      :headers='headers'
      :search-headers='searchHeaders'
      :rows='rows'
      :editUser='editUser'
      :edit-groups='{
        useImportExcel:true
      }'
      @button:add:click='insertRow'
      @button:save:click='saveRows'
      @button:remove:click='removeRows'
      @button:search:click='searchRows'
      @button:import:click='visibleExcelModal=true'

      @table:edit:start='changeStartEdit'
      @table:edit:cancel='changeCancelEdit'
      @table:edit:end='changeEndEdit'
    >
      <template v-slot:state-edit='{item,index}'>
        <td>{{item.id}}</td>
        <td>
          <v-text-field hide-details outlined dense v-model='editUser.name'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details outlined dense v-model='editUser.number'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details outlined dense v-model='editUser.position'></v-text-field>
        </td>
        <td>
          <v-btn @click='changeEndEdit(index)' icon>
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn @click='changeCancelEdit(index)' icon>
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </td>
      </template>
      <template v-slot:state-basic='{item,index}'>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.number}}</td>
        <td>{{item.position}}</td>
        <td>
          <v-btn @click='changeStartEdit(index)' icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </template>
    </data-grid-view>
  </div>
</template>

<script>
let i = 1;
export default {
  name: "user-manager",
  data() {
    return {
      visibleExcelModal: false,
      headers: [
        {value: "id", text: "ID", align: "center", width: "100px", changeAble: false},
        {value: "name", text: "이름", align: "center", width: "200px", changeAble: true},
        {value: "number", text: "전화번호", align: "center", width: "150px", changeAble: true},
        {value: "position", text: "구분", align: "center", width: "150px", changeAble: true},
        {value: "edits", text: "관리", align: "center", width: "100px", changeAble: false},
      ],
      rows: [],
      editUser: this.createDefaultEditUser(),
    }
  },
  computed: {
    searchHeaders: function () {
      return this.headers.map(header => ({
          text: header.text,
          value: header.value
        })
      )
    }
  },
  methods: {

    createDefaultEditUser() {
      return {
        name: "",
        number: "",
        position: "",
      }
    },
    createDefaultUser({name, number, position}) {
      return {
        editable: false,
        division: "INSERT",
        id: (i++).toString(),
        name: name ?? "",
        number: number ?? "",
        position: position ?? ""
      }
    },
    insertRow() {
      this.rows.unshift(this.createDefaultUser());
    },

    changeStartEdit(index) {
      if (this.validateEditingRow()) return;
      this.editUser = {
        name: this.rows[index].name,
        number: this.rows[index].number,
        position: this.rows[index].position
      }
      if (this.rows[index].division === "INSERT") {
        this.rows[index].editable = true;
        return;
      }
      const selectedIndex = this.$store.getters["sample/findIndex"](this.rows[index].id);
      this.$store.commit("sample/changeStartEdit", {
        index: selectedIndex
      });
      this.rows[index].editable = true;
    },
    changeCancelEdit(index) {
      if (this.rows[index].division === "INSERT") {
        this.rows[index].editable = false;
        return;
      }

      const selectedIndex = this.$store.getters["sample/findIndex"](this.rows[index].id);
      this.$store.commit("sample/changeCancelEdit", {
        index: selectedIndex
      });
      this.editUser = this.createDefaultEditUser();
    },
    changeEndEdit(index) {
      if (this.rows[index].division === "INSERT") {
        this.rows.splice(index, 1, {
          ...this.rows[index],
          ...this.editUser
        })
        this.rows[index].editable = false;
        return;
      }
      const selectedIndex = this.$store.getters["sample/findIndex"](this.rows[index].id);
      if (selectedIndex === -1) return;
      this.$store.commit("sample/changeEndEdit", {
        index: selectedIndex,
        editUser: this.editUser
      });
      const data = this.$store.getters["sample/findByIndex"](selectedIndex);
      this.rows.splice(index, 1,
        JSON.parse(JSON.stringify(data)))
      this.rows[index].division = "UPDATE";
      this.rows[index].editable = false;
    },

    validateEditingRow() {
      return this.rows.some((row, index) => {
        if (row.editable) {
          alert(`아직 ${index + 1}행이 편집중입니다.`);
          return false;
        }
      })
    },

    saveRows() {
      if (this.validateEditingRow()) return;
      const changedRows = this.rows.filter(row => row.division !== "SELECT");
      this.$store.dispatch("sample/saveRows", changedRows);
    },
    removeRows(indexes) {

      const savedIndex = indexes
        .sort((a, b) => a - b)
        .reverse()
        .reduce((pre, cal) => {
          console.log(pre, cal);
          if (this.rows[cal].division === "INSERT") {
            this.$delete(this.rows, cal);
            this.rows.splice(cal, 1);
            return pre;
          }
          const storedIndex = this.$store.getters["sample/findIndex"](this.rows[cal].id);
          this.rows.splice(cal, 1);
          return [...pre, storedIndex];
        }, [])
      if (savedIndex.length) {
        this.$store.commit("sample/removeRows", {
          indexes: savedIndex
        });
      }
    },
    searchRows(payload) {
      this.rows =
        JSON.parse(JSON.stringify(this.$store.getters["sample/searchUser"](payload)))
    },
    importExcel(payload) {
      this.rows.unshift(...payload.rows.map(row => this.createDefaultUser(row)));
      this.visibleExcelModal = false;
    }
  }
}
</script>

