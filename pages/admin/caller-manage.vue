<template>
    <data-grid-view
      class='mt-7'
      :headers='headers'
      :rows='rows'
      :search-headers='searchHeaders'
      title='발신번호 관리'
      selected-key='v_index'
      @button:add:click='insertNewRow'
      @button:remove:click='handleRemoveRows'
      @button:save:click='handleSaveRows'
      @button:search:click='handleSearchRow'
    >
      <template v-slot:state-edit='{item,index}'>
        <td>{{item.number}}</td>
        <td>
          <v-text-field hide-details outlined dense v-model='editCallerNumber.manager'></v-text-field>
        </td>
        <td>
          <v-text-field hide-details outlined dense v-model='editCallerNumber.department'></v-text-field>
        </td>
        <td>{{item.status}}</td>
        <td>
          <v-text-field hide-details outlined dense v-model='editCallerNumber.memo'></v-text-field>
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
        <td>{{item.number}}</td>
        <td>{{item.manager}}</td>
        <td>{{item.department}}</td>
        <td>{{item.status}}</td>
        <td>{{item.memo}}</td>
        <td>
          <v-btn @click='handleEditStart(item)' icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </template>
    </data-grid-view>

</template>

<script>


export default {
  name: "CallerManage",
  data() {
    return {
      rows: [],
      headers: [
        {
          "value": "callerNumber",
          "text": "발신번호",
          "align": "center",
          "width": "100px",
          "searchAble": true
        },
        {
          "value": "manager",
          "text": "담당자",
          "align": "center",
          "width": "200px",
          "searchAble": true
        },
        {
          "value": "department",
          "text": "조직",
          "align": "center",
          "width": "150px",
          "searchAble": true
        },
        {
          "value": "status",
          "text": "상태",
          "align": "center",
          "width": "150px",
          "changeAble": true
        },
        {
          "value": "memo",
          "text": "메모",
          "align": "center",
          "width": "150px",
          "searchAble": true
        },
        {
          "value": "",
          "text": "관리",
          "align": "center",
          "width": "150px",
          "searchAble": false
        }
      ],
      editCallerNumber: this.createEditDefault({}),

      v_index: 0
    }
  },
  methods: {
    createDefault({callerNumber, manager, department, status, memo,}) { // 초기 값
      return {
        editable: false,
        division: "INSERT",
        v_index: this.v_index++,
        callerNumber: callerNumber ?? "",
        manager: manager ?? "",
        department: department ?? "",
        status: status ?? "",
        memo: memo ?? "",
      }
    },
    createEditDefault({manager, department, memo}) { // 편집 할 대상의 초기 값
      return {
        manager: manager ?? "",
        department: department ?? "",
        memo: memo ?? "",
      }
    },
    findByIndex(row) {
      return this.rows.findIndex(({v_index}) => row.v_index === v_index);
    },
    handleEditStart(row) {
      if (this.validateEditingRow()) return;
      const index = this.findByIndex(row);
      this.rows.splice(index, 1, {
        ...row,
        editable: true,
      })
      this.editCallerNumber = this.createEditDefault({
        manager: row.manager,
        department: row.department,
        memo: row.memo
      })
    },
    handleEditEnd(row) {
      const index = this.findByIndex(row);

      this.rows.splice(index, 1, {
        ...row,
        editable: false,
        division: row.division === "INSERT" ? "INSERT" : "UPDATE",
        ...this.editCallerNumber
      });
      this.editCallerNumber = this.createEditDefault({});
    },
    handleEditCancel(row) {
      const index = this.findByIndex(row);
      this.rows.splice(index, 1, {
        ...row,
        editable: false,
      })
      this.editCallerNumber = this.createEditDefault({});
    },
    handleRemoveRows(indexes) {
      //const rows = indexes.reduce(index=>  this.rows[index]);
      const rows = indexes.reduce((pre, cur) => {
        if (this.rows[cur].division !== "INSERT") return [...pre, this.$store.getters["callerNumberManage/findByIndex"](this.rows[cur])];
        return pre
      }, [])
      this.$store.dispatch("callerNumberManage/removeRows", {
        indexes
      })

      indexes.reverse().forEach(index => {
        this.rows.splice(index, 1);
      })

    },
    handleSaveRows() {
      if (this.validateEditingRow()) return;
      const changedRows = this.rows.filter(row => row.division !== "SELECT");
      this.$store.dispatch("callerNumberManage/saveRows", {
        rows: changedRows
      })

      changedRows.forEach(row => {
        this.rows.splice(this.findByIndex(row), 1, {
          ...row,
          division: "SELECT"
        });
      })
    },
    insertNewRow() {
      this.rows.unshift(this.createDefault({}))
    },
    validateEditingRow() {
      return this.rows.some((row,index) => {
        if (row.editable) {
          alert(`${index + 1}행이 편집중입니다.`);
          return false;
        }
      })
    },
    handleSearchRow(payload) {
      const result = this.$store.getters["callerNumberManage/findByHeaderName"](payload);

      this.rows = Object.assign(result, {});
    }
  },
  computed: {
    searchHeaders() {
      return this.headers.filter(header => header.searchAble)
    }
  }
}
</script>

<style scoped>

</style>
