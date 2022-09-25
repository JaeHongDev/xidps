<script lang='ts' setup>
import {
  defineProps, PropType, reactive, ref,
} from 'vue';
import { DataTableHeader } from 'vuetify';
import { EditStatus, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';

interface IDataGridViewHeader extends DataTableHeader {
  searchAble?: boolean;
}

const props = defineProps({
  /**
   * table uuid key
   */
  selectedKey: {
    type: String as PropType<string>,
    required: true,
    default() {
      return '';
    },
  },
  rows: {
    type: Array as PropType<Array<any>>,
  },
  headers: {
    type: Array as PropType<Array<IDataGridViewHeader>>,
  },
  useSelector: {
    type: Boolean as PropType<boolean>,
    default() {
      return true;
    },
  },
  usePageable: {
    type: Boolean as PropType<boolean>,
    default() {
      return true;
    },
  },
  selectedIndexes: {
    type: Array as PropType<Array<number>>,
    required: false,
    default() {
      return [];
    },
  },
});
// eslint-disable-next-line no-undef
const emit = defineEmits<{(e:'select', key:number): void
}>();
const page = reactive({
  pageCount: 0,
  nowPage: 1,
});
const updatedRow = (item: IBasicRows) => ({ updated: item.inputStatus === EInputStatus.UPDATE });
// eslint-disable-next-line @typescript-eslint/ban-types
const selectIndex = (select:Function, item: any) => {
  console.log(select);
};
</script>
<template>
  <div>
    <v-data-table
      :disable-pagination='!usePageable'
      :footer-props='{"items-per-page-options": [20]}'
      :headers='headers'
      :items='rows'
      :page.sync='page.nowPage'
      :selectable-key='selectedKey'
      :show-select='useSelector'
      class='data-grid-view'
      dense
      height='750'
      hide-default-footer
      item-key='key'
      @page-count='page.pageCount = $event'
    >
      <template v-slot:item='{item,index,isSelected,select,active}'>
        <tr :key='index' :class='updatedRow(item)'>
          <td class='fixed'>
            <v-checkbox
              :input-value='isSelected'
              @click='select(item)'
              dense hide-details></v-checkbox>
          </td>
          <slot v-if='item.editStatus === EditStatus.EDITING' name='state-edit' v-bind='{item:item,active}'></slot>
          <slot v-else name='state-basic' v-bind='{item:item,active}'></slot>
        </tr>
      </template>
    </v-data-table>
    <v-pagination v-show='usePageable' v-model='page.nowPage' :length='page.pageCount' :total-visible='10'></v-pagination>
  </div>
</template>

<style scoped lang='scss'>
@import "~@/assets/scss/components/DataTable/dataTable.scss";
</style>
