<script lang='ts' setup>
import {
  defineProps, reactive, withDefaults, defineEmits,
} from 'vue';
import { EditStatus, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';
import EditHandlerGroup from '@/components/common/EditHandlerGroup/EditHandlerGroup.vue';
import { IEditHandlerGroup } from '@/components/common/EditHandlerGroup/EditHandlerGroupComposable';
import { IDataGridViewHeader } from '@/components/common/CrudDataTable/ICrudTable';

interface ICrudDataTableProps {
  tableTitle?: string
  rows: Array<IBasicRows>,
  headers: Array<IDataGridViewHeader>,
  selectedKey?: string
  useSelector?: boolean,
  usePageable?: boolean,
  useButtons?:IEditHandlerGroup
  height?: number
}

const props = withDefaults(defineProps<ICrudDataTableProps>(), {
  height: 750,
});
console.log(props);
const emit = defineEmits<{(e: 'select', key: number): void,
  (e: 'click:remove', keys:IBasicRows[]): void,
  (e: 'click:save'): void
  (e: 'click:add'): void
  (e: 'click:import'):void
}>();
const page = reactive({
  pageCount: 0,
  nowPage: 1,
  keys: [],
});
const updatedRow = (item: IBasicRows) => ({ updated: item.inputStatus === EInputStatus.UPDATE });
function handleRemove() {
  emit('click:remove', page.keys);
  page.keys = [];
}
</script>
<template>
  <div>
    <v-card-actions>
      <div>
        <span class='fw-semi-bold light-navy-blue fs-3 ' data-test='title'>{{props.tableTitle}}</span>
        <div class=''>
          <span class='fs-5 warm-grey fw-regular' data-test='count'>TOTAL : {{props.rows?.length}} 건</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <edit-handler-group
        :use-buttons='props.useButtons'
        @click:remove='handleRemove'
        @click:save='emit("click:save")'
        @click:import='emit("click:import")'
        @click:add='emit("click:add")'>
      </edit-handler-group>
    </v-card-actions>
    <div>
      <v-data-table
        v-model="page.keys"
        :disable-pagination='!props.usePageable'
        :footer-props='{"items-per-page-options": [20]}'
        :headers='props.headers'
        :items='props.rows'
        :page.sync='page.nowPage'
        :selectable-key='props.selectedKey'
        :show-select='props.useSelector'
        class='data-grid-view'
        dense
        :height="props.height"
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
      <v-pagination v-show='props.usePageable' v-model='page.nowPage' :length='page.pageCount' :total-visible='10'></v-pagination>
    </div>
  </div>

</template>

<style scoped lang='scss'>
@import "~@/assets/scss/components/DataTable/dataTable.scss";
</style>
