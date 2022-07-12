<template>
  <v-card class='container--wrap'>
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
      :footer-props="{'items-per-page-options': [20]}"
      :page.sync='page'
      @page-count='pageCount = $event'
      height='755'
      class='data-grid-view'
      show-select
      hide-default-footer
      v-model='selectedIndexes'
      selectable-key='item.id'
      item-key='id'

      dense>
      <template v-slot:item='{item,index,isSelected,select}'>
        <tr :class='{updated:rows[index].division === "UPDATE"}'>
          <td><v-checkbox
            :input-value="isSelected"
            @click="select(item)"
            dense hide-details ></v-checkbox></td>
          <slot v-if='item.editable' name='state-edit' v-bind='{item,index}'></slot>
          <slot v-else name='state-basic' v-bind='{item,index}'></slot>
        </tr>
      </template>
    </v-data-table>
    <v-pagination
      v-model='page'
      :length='pageCount'
      :total-visible='7'
    ></v-pagination>
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
    },
  },
  data() {
    return {
      selectedIndexes: [],
      page: 1,
      pageCount: 0,
    }
  },
  methods: {
    clickAddButton() {
      this.$emit("button:add:click");
    },
    removeRows() {
      this.$emit("button:remove:click", this.selectedIndexes)
    },
    searchRows(payload) {
      this.$emit("button:search:click", payload);
    },
  },

  updated(){
    console.log(this.selectedIndexes);
  }
}
</script>
<style scoped lang='scss'>
.container--wrap {
  padding: 30px 40px 27px 38px;
}

.updated {
  border-left: 6px solid #8e9bff !important;
  margin-left: 6px !important;
}

.data-grid-view {
  border-collapse: collapse;
  border-bottom: 1px solid $warm-grey;

  ::v-deep .v-data-table-header {
    border-top: 1px solid $warm-grey !important;
    border-bottom: 1px solid $warm-grey !important;
    border-left: none;
    border-right: none;

    th {
      color: $light-navy-blue !important;
      vertical-align: middle !important;
      font-size: $semi-bold;
      border-bottom: none !important;
      text-align: center;
      //color: $light-navy-blue-color !important;
      border-right: 2px solid #d5d5d5;
      border-spacing: 5px;

      &:last-child {
        border-right: none;
      }
    }
  }
  tbody {
    height: 550px !important;
    tr {
      max-height: 35px !important;
      ::v-deep .v-input {
        margin: 0 !important;
      }
    }
    ::v-deep tr {
      :hover {
        background-color: $pale-lilac !important;
        cursor: pointer;
      }
    }
    tr:hover {
      background-color: $pale-lilac !important;
      cursor: pointer;
    }
  }

  ::v-deep td, th {
    border-bottom: none !important;
    text-align: center;
    //color: $light-navy-blue-color !important;
    vertical-align: middle !important;
    border-right: 2px solid #d5d5d5;
    border-spacing: 5px;
    border-collapse: collapse;

    &:last-child {
      border-right: none;
    }
  }

  td, th {
    //border-right: 1px solid  !important;
    border-bottom: none !important;
    text-align: center;
    //color: $light-navy-blue-color !important;
    vertical-align: middle !important;
    border-right: 2px solid #d5d5d5;
    border-spacing: 5px;
    border-collapse: collapse;

    &:last-child {
      border-right: none;
    }
  }
}
</style>
