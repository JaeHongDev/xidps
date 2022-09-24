<script lang='ts' setup>
import { CallerManageComposable, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';
import { customModalComposable } from '@/components/common/CustomModal/CustomModalComposable';
import FileUploader from '@/components/common/FileUploader/FileUploader.vue';
import CustomModal from '@/components/common/CustomModal/CustomModal.vue';
import EditHandlerGroup from '@/components/common/EditHandlerGroup/EditHandlerGroup.vue';
import DataGridView, { IDataGridViewHeader } from '@/components/common/DataTable/DataGridView.vue';
import CallerIdForm from '@/components/domain/callerId/CallerIdForm/CallerIdForm.vue';

const {
  callerList,
  insertNewCaller,
  handleEditStart,
  handleEditEnd,
  handleEditCancel,
  handleSave,
  handleRemove,
  editCallerId,
  selectedIndexes,
} = CallerManageComposable();

const headers:Array<IDataGridViewHeader> = [
  {
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
  },
];
const {
  isShow, title, openModal, closeModal,
} = customModalComposable({ titleProp: '발신번호관리' });

</script>
<template>
  <v-card class='pa-5'>
    <custom-modal :is-show='isShow' :title='title' @close='closeModal'>
      <caller-id-form></caller-id-form>
    </custom-modal>
    <v-btn @click='openModal'>모달</v-btn>
    <v-card-actions>
      <div>
        <span class="fw-semi-bold light-navy-blue fs-3 " data-test="title">발신번호 관리</span>
        <div class="">
          <span class="fs-5 warm-grey fw-regular" data-test="count">TOTAL : {{callerList.length}} 건</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <edit-handler-group
        @click:remove='handleRemove'
        @click:save='handleSave'
        @click:add='insertNewCaller'></edit-handler-group>
    </v-card-actions>
    <data-grid-view
      :rows='callerList'
      :headers='headers'
      :selected-indexes='selectedIndexes'
      selected-key='key'>
      <template v-slot:state-edit='{item}'>
        <td>{{item.callerId}}</td>
        <td><v-text-field hide-details outlined v-model='editCallerId.manager' dense></v-text-field></td>
        <td><v-text-field hide-details outlined v-model='editCallerId.department' dense></v-text-field></td>
        <td><v-text-field hide-details outlined v-model='editCallerId.status' dense></v-text-field></td>
        <td><v-text-field hide-details outlined v-model='editCallerId.memo' dense></v-text-field></td>
        <td>
          <v-btn @click='handleEditEnd(item.key)' icon>
            <v-icon>mdi-check</v-icon>
          </v-btn>
          <v-btn @click ='handleEditCancel(item.key)' icon>
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
          <v-btn @click="handleEditStart(item.key)" icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </template>
    </data-grid-view>
  </v-card>
</template>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";
</style>
