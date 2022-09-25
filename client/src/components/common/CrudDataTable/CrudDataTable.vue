<script lang='ts' setup>
import {
  defineProps, reactive, withDefaults, defineEmits,
} from 'vue';
import { EditStatus, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';
import EditHandlerGroup from '@/components/common/EditHandlerGroup/EditHandlerGroup.vue';
import { ICrudDataTable } from '@/components/common/CrudDataTable/ICrudTable';

type Props = Omit<ICrudDataTable, ''>

interface ICrud {
  id: string;
}

const {
  props: {
    rows, headers, useSelector, usePageable, tableTitle, useButtons, selectedKey,
  },
} = withDefaults(defineProps<{props:Props}>(), {
});

const emit = defineEmits<{(e: 'select', key: number): void,
  (e:'click:remove'):void,
  (e:'click:save'):void
  (e:'click:add'):void
}>();
const page = reactive({
  pageCount: 0,
  nowPage: 1,
});
const updatedRow = (item:IBasicRows) => ({ updated: item.inputStatus === EInputStatus.UPDATE });
</script>
<template>
  <div>
    <v-card-actions>
      <div>
        <span class='fw-semi-bold light-navy-blue fs-3 ' data-test='title'>{{tableTitle}}</span>
        <div class=''>
          <span class='fs-5 warm-grey fw-regular' data-test='count'>TOTAL : {{rows.length}} 건</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <edit-handler-group
        :use-buttons='useButtons'
        @click:remove='emit("click:remove")'
        @click:save='emit("click:save")'
        @click:add='emit("click:add")'>
      </edit-handler-group>
    </v-card-actions>
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
  </div>

</template>

<style scoped lang='scss'>
@import "~@/assets/scss/components/DataTable/dataTable.scss";
</style>
