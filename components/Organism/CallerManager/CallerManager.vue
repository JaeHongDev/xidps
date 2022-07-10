<template>
  <v-card class='pa-3'>
    <validate-caller-modal :is-show-caller-modal='isShowValidateModal'
                           @insert-row='insertNewRow'></validate-caller-modal>
    <v-row class='d-flex justify-space-between'>
      <v-col>
        <data-table-header title='발신자 관리' :count='rows.length'></data-table-header>
      </v-col>
      <v-col>
        <edit-handler-group
          class='xidps-edit-handler-group'
          @click:search='handleLoadData'
          @click:add='openShowValidateModal'
          @click:save='handleRowSaveData'
          :search-headers='extractionHeaderKeyValue'>
        </edit-handler-group>
      </v-col>
    </v-row>
    <v-data-table
      dense
      :headers='headers'
      :items='rows'
      items-per-page='20'
      item-key='number'
      height='755'
      class='caller-manager-table' show-select
    >
      <template v-slot:item='{item,index}'>
        <tr v-if='item.editable'>
          <td>
            <v-checkbox v-model='selectedIndexes' dense hide-details :value='index' v-text='item.division'></v-checkbox>
          </td>
          <td>{{item.number}}</td>
          <td>
            <v-text-field hide-details outlined dense v-model='editItem.name'/>
          </td>
          <td>
            <v-text-field hide-details outlined dense v-model='editItem.department'/>
          </td>
          <td>{{item.status}}</td>
          <td>
            <v-text-field hide-details outlined dense v-model='editItem.memo'/>
          </td>
          <td>
            <v-btn @click='handleEndEditStateByRowIndex(index)' icon>
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn @click='handleCancelEditStateByRowIndex(index)' icon>
              <v-icon>mdi-cancel</v-icon>
            </v-btn>
          </td>
        </tr>

        <tr v-else>
          <td>
            <v-checkbox v-model='selectedIndexes' hide-details :value='index' v-text='item.division'></v-checkbox>
          </td>
          <td>{{item.number}}</td>
          <td>{{item.name}}</td>
          <td>{{item.department}}</td>
          <td>{{item.status}}</td>
          <td>{{item.memo}}</td>
          <td>
            <v-btn @click='handleChangeEditableByRowIndex(index)' icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "CallerManager",
  data() {
    return {
      headers: [
        {value: "발신번호", align: "center", divider: true, text: "발신번호", width: "100px"},
        {value: "담당자", align: "center", divider: true, text: "담당자", width: "200px"},
        {value: "조직", align: "center", divider: true, text: "조직", width: "400px"},
        {value: "상태", align: "center", divider: true, text: "상태", width: "200px"},
        {value: "메모", align: "center", divider: true, text: "메모", width: "200px"},
        {value: "관리", align: "center", divider: true, text: "관리", width: "200px"}
      ],
      rows: [],
      editItem: {
        name: "",
        department: "",
        memo: ""
      },
      selectedIndexes: [],
      isShowValidateModal: false
    };
  },
  computed: {
    extractionHeaderKeyValue() {
      return this.headers.map((header) => ({
        text: header.text,
        value: header.value
      }));
    }
  },
  methods: {
    createDefaultCallerManager: (number, division = "INSERT") => ({
      editable: false,
      division,
      number,
      name: "",
      department: "",
      status: "",
      memo: ""
    }),
    createDefaultEditItem: () => ({
      name: "",
      department: "",
      memo: ""
    }),
    openShowValidateModal() {
      this.isShowValidateModal = true;
    },
    closeShowValidateModal() {
      this.isShowValidateModal = false;
    },
    insertNewRow(payload) {
      this.rows.unshift(this.createDefaultCallerManager(payload.number, "INSERT"));
      this.closeShowValidateModal();
    },
    handleLoadData(payload) {
      this.rows = this.$store.getters["callerManager/findByName"](payload)
    },
    handleRowSaveData() {
      this.rows.some((row, index) => {
        if (row.editable) {
          window.alert(` ${index + 1}번째 열이 현재 편집 중에 있습니다.`)
          return true;
        }
      });
      this.$store.dispatch("callerManager/callerManagerRowsSave", this.rows.filter(row => row.division !== "SELECT"))
      console.log(this.rows);
    },
    handleEndEditStateByRowIndex(index) {
      this.rows.splice(index, 1, {
        ...this.rows[index],
        ...this.editItem
      });

      this.editItem = this.createDefaultEditItem();
      this.rows[index].editable = false;
      this.rows[index].division = this.rows[index].division === "SELECT" ? "UPDATE" : this.rows[index].division;

    },
    handleCancelEditStateByRowIndex(index) {
      this.rows[index].editable = false;
      this.editItem = this.createDefaultEditItem();
    },
    handleChangeEditableByRowIndex(index) {
      this.editItem.memo = this.rows[index].memo;
      this.editItem.department = this.rows[index].department;
      this.editItem.name = this.rows[index].name;
      this.rows[index].editable = true;
    }
  }
};
</script>
<style scoped lang='scss'>

.caller-manager-table {
  border-collapse: collapse;;

  ::v-deep .v-data-table-header {
    //border-top: 1px solid $warm-grey !important;
    //border-bottom: 1px solid $warm-grey !important;
    border-top: 1px solid $warm-grey;
    border-bottom: 1px solid $warm-grey;
    border-left: none;
    border-right: none;

    th {
      color: $light-navy-blue !important;
      vertical-align: middle !important;
      font-size: $semi-bold;
      border-bottom: none !important;
      text-align: center;
      //color: $light-navy-blue-color !important;
      border-right: 2px dashed #d5d5d5;
      border-spacing: 5px;

      &:last-child {
        border-right: none;
      }
    }
  }

  tbody {
    border-bottom: 1px solid $warm-grey;
    height: 550px !important;

    tr {
      max-height: 35px !important;

      ::v-deep .v-input {
        margin: 0 !important;
      }
    }

    tr:hover {
      background-color: $pale-lilac !important;
      cursor: pointer;
    }
  }


  td, th {
    //border-right: 1px dashed  !important;
    border-bottom: none !important;
    text-align: center;
    //color: $light-navy-blue-color !important;
    vertical-align: middle !important;
    border-right: 2px dashed #d5d5d5;
    border-spacing: 5px;
    border-collapse: collapse;

    &:last-child {
      border-right: none;
    }
  }
}

.xidps-edit-handler-group {

}
</style>
