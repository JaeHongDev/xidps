<script lang='ts' setup>
import CustomModal from '@/components/common/CustomModal/CustomModal.vue';
import CallerIdForm from '@/components/domain/callerId/CallerIdForm/CallerIdForm.vue';
import { reactive } from 'vue';
import { ICrudDataTable } from '@/components/common/CrudDataTable/ICrudTable';
import { EditStatus, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';
import { customModalComposable } from '@/components/common/CustomModal/CustomModalComposable';
import CrudDataTable from '@/components/common/CrudDataTable/CrudDataTable.vue';

interface IEditCaller{
  manager: string,
  department: string;
  status: string;
  memo:string;
}
interface ICaller extends IBasicRows, IEditCaller{
  callerId:string
}

interface ICallerManagePage {
  editCallerId: IEditCaller;
  table: ICrudDataTable;
  index:number;
}

const createDefaultEditCaller = (): IEditCaller => ({
  status: '',
  manager: '',
  department: '',
  memo: '',
});

const data = reactive<ICallerManagePage>({
  table: {
    rows: [],
    headers: [{
      value: 'callerNumber',
      text: '발신번호',
      align: 'center',
      width: '100px',
      searchAble: true,
    },
    {
      value: 'manager',
      text: '담당자',
      align: 'center',
      width: '200px',
      searchAble: true,
    },
    {
      value: 'department',
      text: '조직',
      align: 'center',
      width: '150px',
      searchAble: true,
    },
    {
      value: 'status',
      text: '상태',
      align: 'center',
      width: '150px',
      searchAble: true,
    },
    {
      value: 'memo',
      text: '메모',
      align: 'center',
      width: '150px',
      searchAble: true,
    },
    {
      value: '',
      text: '관리',
      align: 'center',
      width: '150px',
      searchAble: false,
    }],
    usePageable: true,
    tableTitle: '발신번호 관리',
    useButtons: {
      useAdd: true,
      useSave: true,
      useDelete: true,
      useSearch: true,
      useImportExcel: false,
      usePersonalizedUser: false,
    },
    selectedKey: 'key',
    useSelector: true,
  },
  editCallerId: createDefaultEditCaller(),
  index: 0,
});

const callerFormModal = customModalComposable({ title: '발신번호 추가', isShow: false });
function createDefaultCaller(index:number, callerId: string):ICaller {
  return {
    key: index,
    inputStatus: EInputStatus.INSERT,
    editStatus: EditStatus.UNEDITTING,
    callerId: callerId && '',
    manager: '123',
    department: '123',
    status: '',
    memo: '',
  };
}

function insertNewCaller(callerNumber:string) {
  data.table.rows.unshift(createDefaultCaller(data.index += 1, callerNumber));
  callerFormModal.closeModal();
}
function findIndexByKey(key: number) {
  return data.table.rows.findIndex((caller) => caller.key === key);
}
function handleEditStart(key:number) {
  const findCallerId = data.table.rows[findIndexByKey(key)] as ICaller;
  findCallerId.editStatus = EditStatus.EDITING;

  data.editCallerId.manager = findCallerId.manager;
  data.editCallerId.memo = findCallerId.memo;
  data.editCallerId.status = findCallerId.status;
  data.editCallerId.department = findCallerId.department;
}
function handleEditEnd(key:number) {
  const findCallerId = data.table.rows[findIndexByKey(key)] as ICaller;
  if (findCallerId.inputStatus === EInputStatus.SELECT) findCallerId.inputStatus = EInputStatus.UPDATE;

  findCallerId.manager = data.editCallerId.manager;
  findCallerId.memo = data.editCallerId.memo;
  findCallerId.department = data.editCallerId.department;
  findCallerId.status = data.editCallerId.status;
  findCallerId.editStatus = EditStatus.UNEDITTING;

  data.editCallerId = createDefaultEditCaller();
}

function handleEditCancel(key:number) {
  const findCallerId = data.table.rows[findIndexByKey(key)];
  findCallerId.editStatus = EditStatus.UNEDITTING;
}

function handleSave() {
  data.table.rows.forEach((callerId) => {
    // eslint-disable-next-line no-param-reassign
    callerId.inputStatus = EInputStatus.SELECT;
  });
}

function handleRemove(keys:ICaller[]) {
  keys.reverse().forEach((caller) => {
    data.table.rows.splice(data.table.rows.indexOf(caller), 1);
  });
}

</script>
<template>
  <v-card class='pa-5'>
    <custom-modal
      :is-show='callerFormModal.modal.isShow'
      :title='callerFormModal.modal.title'
      @close='callerFormModal.closeModal'>
      <caller-id-form @approve:number="insertNewCaller"></caller-id-form>
    </custom-modal>
    <crud-data-table
      :table-title="data.table.tableTitle"
      :rows='data.table.rows'
      :headers='data.table.headers'
      :use-buttons="data.table.useButtons"
      :selected-key='data.table.selectedKey'
      :use-selector="data.table.useSelector"
      :use-pageable="data.table.usePageable"
      @click:add = "insertNewCaller"
      @click:save="handleSave"
      @click:remove="handleRemove"
    >
      <template v-slot:state-edit='{item}'>
        <td>{{item.callerId}}</td>
        <td><v-text-field hide-details outlined :value="item.manager" v-model='data.editCallerId.manager' dense></v-text-field></td>
        <td><v-text-field hide-details outlined :value="item.department" v-model='data.editCallerId.department' dense></v-text-field></td>
        <td><v-text-field hide-details outlined :value="item.status" v-model='data.editCallerId.status' dense></v-text-field></td>
        <td><v-text-field hide-details outlined :value="item.dense" v-model='data.editCallerId.memo' dense></v-text-field></td>
        <td>
          <v-btn  @click="handleEditEnd(item.key)" icon>
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn @click="handleEditCancel(item.key)" icon>
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </td>
      </template>
      <template v-slot:state-basic="{item}">
        <td>{{ item.callerId}}</td>
        <td>{{ item.manager}}</td>
        <td>{{ item.department }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.memo }}</td>
        <td>
          <v-btn  @click="handleEditStart(item.key)" icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </template>
    </crud-data-table>
  </v-card>
</template>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";
</style>
