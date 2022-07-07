<template>
  <v-card class="pa-3">
    <validate-caller-modal :dialog="show" @close-modal="closeModal" @insert-row="insertRow"></validate-caller-modal>
    <v-row class="d-flex justify-space-between">
      <v-col><data-table-header title="발신자 관리" :count="items.length"></data-table-header></v-col>
      <v-col><edit-handler-group class="xidps-edit-handler-group"
                                 @search="searchCallerManagers"
                                 @click:add="showModal"
                                 @click:remove="handleRemoveRow"
                                 :search-headers="extractionHeaderKeyValue">
      </edit-handler-group></v-col>
    </v-row>
    <v-data-table dense height="755"
                  :headers="headers"
                  :items="items"
                  items-per-page="20"
                  item-key="number"
                  class="caller-manager-table" show-select
    >
      <template v-slot:item="{item,index}">
        <tr v-if="item.editable">
          <td>
            <v-checkbox  v-model="selectedIndexes"  dense hide-details :value="index"></v-checkbox>
          </td>
          <td>{{ item.number }}</td>
          <td>
            <v-text-field hide-details outlined dense v-model="editItem.name"/>
          </td>
          <td>
            <v-text-field hide-details outlined dense v-model="editItem.department"/>
          </td>
          <td>{{ item.status }}</td>
          <td>
            <v-text-field hide-details outlined dense v-model="editItem.memo"/>
          </td>
          <td>
            <v-btn @click="clickCheckBtn(index)" icon>
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn @click="$store.commit('callerManager/cancelEditState',index)" icon>
              <v-icon>mdi-cancel</v-icon>
            </v-btn>
          </td>
        </tr>

        <tr v-else>
          <td>
            <v-checkbox v-model="selectedIndexes" hide-details :value="index"></v-checkbox>
          </td>
          <td>{{ item.number }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.department }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.memo }}</td>
          <td>
            <v-btn @click="clickEditBtn(index,item)" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>

    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CallerManager",
  data() {
    return {
      headers: [
        {value: "발신번호", align: "center", divider: true, text: "발신번호", width: "100px"},
        {value: "담당자", align: "center", divider: true, text: "담당자", width: "200px",},
        {value: "조직", align: "center", divider: true, text: "조직", width: "400px",},
        {value: "상태", align: "center", divider: true, text: "상태", width: "200px",},
        {value: "메모", align: "center", divider: true, text: "메모", width: "200px",},
        {value: "관리", align: "center", divider: true, text: "관리", width: "200px",},
      ],
      items: [],
      editItem: {
        name: "",
        department: "",
        memo: ""
      },
      selectedIndexes:[],
      show: false
    }
  },
  computed:{
    extractionHeaderKeyValue(){
      return this.headers.map((header)=>({
        text:header.text,
        value:header.value
      }))
    }
  },
  methods: {
    searchCallerManagers(payload){
      this.items = this.$store.getters["callerManager/findByName"](payload);
    },
    clickAddBtn() {
      this.show = true;
    },
    showModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    },
    insertRow(callNumber) {
      this.$store.commit("callerManager/insertCallerManager", callNumber);
      this.show = false;
    },
    findRows() {
      this.items = this.$store.state.callerManager.managers
    },
    clickCheckBtn(index) {
      console.log(this.editItem);
      this.$store.commit('callerManager/updateByIndex', {index, payload: this.editItem});
      this.$store.commit('callerManager/cancelEditState', index)

      this.editItem.department = "";
      this.editItem.name = "";
      this.editItem.memo = "";
    },
    clickEditBtn(index,item){
      this.editItem = {
        department:  item.department,
        name:item.name,
        memo:item.memo
      }
      this.$store.commit('callerManager/editState',index)
    },
    handleRemoveRow(){
      this.$store.commit("callerManager/removeByIndexes",this.selectedIndexes);
      this.selectedIndexes = [];
    }
  },

  mounted() {
    this.items = this.$store.state.callerManager.managers;
  }
}
</script>
<style scoped lang="scss">
.caller-manager-table {
  border-collapse: collapse;

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

      ::v-deep .v-input{
        margin:0 !important;
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
