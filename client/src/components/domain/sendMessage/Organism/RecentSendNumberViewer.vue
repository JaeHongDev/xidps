<script lang="ts" setup>
import CrudDataTable from '@/components/common/CrudDataTable/CrudDataTable.vue';
import { reactive } from 'vue';
import { ICrudDataTable, IDataGridViewHeader } from '@/components/common/CrudDataTable/ICrudTable';
import { IBasicRows } from '@/pages/CallerManageComposable';

interface IRecentSendNumberRow extends IBasicRows{
  key:number;
  receptionTime: string;
  content:string;
  sendResult: {
    success: number,
    fail: number,
    wait: number
  }
}
interface IRecentSendNumberViewer{
  headers: IDataGridViewHeader[];
  rows: IRecentSendNumberRow[],
  table: ICrudDataTable
}
const data = reactive<IRecentSendNumberViewer>({
  rows: [],
  headers: [{
    text: '번호', value: 'id', width: '100px', align: 'center', searchAble: true,
  },
  {
    text: '수신일시', value: 'receptionTime', width: '150px', align: 'center', searchAble: true,
  },
  {
    text: '내용', value: 'content', width: '150px', align: 'center', searchAble: true,
  },
  {
    text: '전송결과', value: 'sendResult', width: '100px', align: 'center', searchAble: true,
  },
  {
    text: '발송건수', value: 'position', width: '100px', align: 'center', searchAble: true,
  },
  ],
  table: {
    tableTitle: '최근 발송량 관리',
    useButtons: {
      useAdd: false,
      useSave: false,
      useDelete: false,
      useSearch: false,
      useImportExcel: false,
      usePersonalizedUser: false,
    },
    usePageable: false,
    useSelector: false,
  },
});
</script>
<template>
    <crud-data-table
    :table-title="data.tableTitle"
    :selected-key="data.table.selectedKey"
    :use-buttons="data.table.useButtons"
    :use-pageable="data.table.usePageable"
    :use-selector="data.table.useSelector"
    :rows="data.rows"
    :headers="data.headers"
    :height="432"
    ></crud-data-table>
</template>

<style scoped>

</style>
