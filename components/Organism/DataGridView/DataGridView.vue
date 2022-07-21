<template>
  <v-card class='container--wrap'>
    <v-row>
      <v-col v-show='useDefaultHeaders'>
        <data-table-header :count='rows.length' :title='title'></data-table-header>
      </v-col>
      <v-col cols='8'>
        <edit-handler-group
          v-show='useDefaultEditor'
          :search-headers='searchHeaders'
          v-bind='editGroups'

          @click:add='clickAddButton'
          @click:save='$emit("button:save:click")'
          @click:remove='removeRows'
          @click:search='searchRows'
          @click:import='$emit("button:import:click")'
        ></edit-handler-group>
      </v-col>
    </v-row>
    <v-data-table
      :headers='headers'
      :items='rows'
      :footer-props="{'items-per-page-options': [20]}"
      :disable-pagination='!usePageable'
      :page.sync='page'

      @page-count='pageCount = $event'

      height='755'
      class='data-grid-view'
      hide-default-footer
      v-model='selectedIndexes'
      :item-key='selectedKey'
      :show-select='useSelector'
      dense>

      <template v-slot:item='{item,index,isSelected,select,active}'>
        <tr :key='index' :class='updatedRow(item)'>
          <td v-if='useSelector'>
            <v-checkbox
              :input-value='isSelected'
              @click='select(item)'
              dense hide-details></v-checkbox>
          </td>
          <slot v-if='item.editable' name='state-edit' v-bind='{item:item,index:calculatedIndex(item),active}'></slot>
          <slot v-else name='state-basic' v-bind='{item:item,index:calculatedIndex(item), active}'></slot>
        </tr>
      </template>
    </v-data-table>
    <v-pagination
      v-show='usePageable'
      v-model='page'
      :length='pageCount'
      :total-visible='7'
    ></v-pagination>
  </v-card>
</template>

<script>
export default { name: "DataGridView",
  props: {
    useDefaultHeaders: {
      type: Boolean,
      default: function () {
        return true;
      }
    },
    useDefaultEditor: {
      type: Boolean,
      default: function () {
        return true;
      }
    },
    useSelector: {
      type: Boolean,
      default: function () {
        return true;
      }
    },
    usePageable: {
      type: Boolean,
      default: function () {
        return true;
      },
    },
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
    editGroups: {
      useSearch: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      usePersonalizedUser: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      useDelete: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      useAdd: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      useImportExcel: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      useSave: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
    },

    selectedKey:{
      type:String,
      default:function(){
        return "id"
      }
    },
    title: {
      type: String,
      default: function () {
        return ""
      }
    }
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
      const indexes = this.selectedIndexes.map((item) => {
        return this.calculatedIndex(item);
        }
      );

      this.$emit("button:remove:click", indexes.sort((a,b)=> b-a))
      this.selectedIndexes = [];
    },
    searchRows(payload) {
      this.$emit("button:search:click", payload);
    },
    calculatedIndex(targetItem) {
      return this.rows.findIndex((item) => {
          return item.v_index === targetItem.v_index
      });
    },
    updatedRow(item){
        return {updated:item.division === "UPDATE"}
    }
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
