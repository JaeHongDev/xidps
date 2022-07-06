<template>
  <v-card class="pa-3">
    <div class="d-flex justify-space-between">
      <data-table-header>
      </data-table-header>
      <edit-handler-group class="xidps-edit-handler-group">
        <validate-caller-modal :dialog="show" @close-modal="closeModal" @insert-row="insertRow"></validate-caller-modal>
        <v-btn @click="clickAddBtn">테스트</v-btn>
        <v-btn @click="findRows">조회</v-btn>
      </edit-handler-group>
    </div>
    <v-data-table dense height="755"
                  :headers="headers" :items="items" class="caller-manager-table" show-select
                  items-per-page="20"
                  item-key="number">
      <template v-slot:item="{item}">
        <tr v-if="item.division === 'SELECT'">
          <td>
            <v-simple-checkbox></v-simple-checkbox>
          </td>
          <td>{{ item.number }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.dept }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.memo }}</td>
          <td>
            <v-btn @click="item.changeDivisionByUpdate()" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr v-if="item.division === 'INSERT' || item.division === 'UPDATE' ">
          <td>
            <v-simple-checkbox></v-simple-checkbox>
          </td>
          <td>{{ item.number }}</td>
          <td>
            <v-text-field hide-details outlined dense v-model="item.name"/>
          </td>
          <td>
            <v-text-field hide-details outlined dense v-model="item.dept"/>
          </td>
          <td>{{ item.status }}</td>
          <td>
            <v-text-field hide-details outlined dense v-model="item.memo"/>
          </td>
          <td>
            <v-btn @click="item.changeDivisionBySelect()" icon>
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-cancel</v-icon>
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
      show:false
    }
  },

  methods: {
    clickAddBtn() {
      this.show = true;
    },
    showModal(){
      this.show = true;
    },
    closeModal(){
      this.show = false;
    },
    insertRow(callNumber){
      this.$store.commit("callerManager/insertRow",callNumber);
      this.show=false;
    }
    ,
    findRows() {
      this.items = this.$store.state.callerManager.managers
      console.log(this.items);
    }
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

  .v-text--field {
    min-height: 35px !important;
  }
}

.xidps-edit-handler-group {

}
</style>
