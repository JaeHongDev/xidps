<template>
  <v-card class='pa-3'>
    <v-row>
      <v-col>
        <data-table-header :count='rows.length' title='사용자 관리'></data-table-header>
      </v-col>
      <v-col>
        <edit-handler-group
          :search-headers='searchHeaders'
          @click:add='clickAddButton'
          @click:save='$emit("button:save:click")'
          @click:remove='removeRows'
          @click:search='searchRows'
        ></edit-handler-group>
      </v-col>
    </v-row>
    <v-data-table
      :headers='headers'
      :items='rows'
      item-key='number'
      height='755'
      class='data-grid-view'
      :footer-props="{
      'items-per-page-options': [20]
    }"
      show-select
      dense>
      <template v-slot:item='{item,index}' >
        <tr v-if='item.editable' :class='{"updated": updatedRows(index)}'  >
          <td>
            <v-checkbox v-model='selectedIndexes' :value='index' dense></v-checkbox>
          </td>
          <td>{{item.editable}}</td>
          <td>{{item.division}}</td>
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
            <v-btn @click='$emit("table:edit:end",index)' icon>
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn @click='$emit("table:edit:cancel",index)' icon>
              <v-icon>mdi-cancel</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr v-else  :class='{"updated": updatedRows(index)}'>
          <td>
            <v-checkbox v-model='selectedIndexes' :value='index' dense></v-checkbox>
          </td>
          <td>{{item.editable}}</td>
          <td>{{item.division}}</td>
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.number}}</td>
          <td>{{item.position}}</td>
          <td>
            <v-btn @click='$emit("table:edit:start",index)' icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "DataGridView",
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    rows: {
      type: Array,
      default: function () {
        return []
      }
    },
    searchHeaders: {
      type: Array,
      default: function () {

      }
    },
    editUser: {
      type: Object
    }
  },
  data() {
    return {
      selectedIndexes: []
    }
  },
  methods: {
    clickAddButton() {
      this.$emit("button:add:click");
    },
    removeRows() {
      this.$emit("button:remove:click", this.selectedIndexes)
      this.selectedIndexes = [];
    },
    searchRows(payload){
      console.log(payload);
      this.$emit("button:search:click",payload);
    },
    updatedRows(index){
      return this.rows[index].division === "UPDATE";
    }
  }
}

const headers = [
  {text: "id"},
  {text: "name"},
  {text: "number"},
  {text: "division"},
]
const headerVariables = [
  {text: "var1"},
  {text: "var2"},
]


</script>

<style scoped lang='scss'>
.updated{
  border-left:6px solid #8e9bff !important;
  margin-left:6px !important;
}
.data-grid-view {
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
</style>
