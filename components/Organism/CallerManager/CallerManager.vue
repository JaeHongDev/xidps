<template>
  <v-card class="pa-3">
    <div class="d-flex justify-space-between">
      <data-table-header>
      </data-table-header>
      <edit-handler-group class="xidps-edit-handler-group">
        <v-btn @click="insertRow">테스트</v-btn>
        <v-btn @click="findRows">조회</v-btn>
      </edit-handler-group>
    </div>
    <v-data-table dense :headers="headers" :items="items" class="caller-manager-table">
      <template v-slot:body="{items}">
        <tbody>
        <template v-for="item in items">
          <tr v-if="item.division === 'SELECT'">
            <td>{{ item.number }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.dept }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.memo }}</td>
            <td>
              <v-btn @click = "item.changeDivisionByUpdate()">수정</v-btn>
              <v-btn>설정</v-btn>
            </td>
          </tr>
          <tr v-if="item.division === 'INSERT' || item.division === 'UPDATE' ">
            <td><v-text-field outlined dense v-model="item.number"/></td>
            <td><v-text-field outlined dense v-model="item.name"/></td>
            <td><v-text-field outlined dense v-model="item.dept"/></td>
            <td><v-text-field outlined dense v-model="item.status"/></td>
            <td><v-text-field outlined dense v-model="item.memo"/></td>
            <td>
              <v-btn @click="item.changeDivisionBySelect()">확인</v-btn>
              <v-btn>설정</v-btn>
            </td>
          </tr>
        </template>
        </tbody>
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
        {value: "조직", align: "center", divider: true, text: "조직", width: "200px",},
        {value: "상태", align: "center", divider: true, text: "상태", width: "200px",},
        {value: "메모", align: "center", divider: true, text: "메모", width: "200px",},
        {value: "관리", align: "center", divider: true, text: "관리", width: "200px",},
      ],
      items: []
    }
  },

  methods: {
    insertRow() {
      console.log(this.$store.commit("callerManager/insertRow"));
    },
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
    tr{
      padding:10px;
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

    &:last-child {
      border-right: none;
    }
  }


}

.xidps-edit-handler-group {

}
</style>
