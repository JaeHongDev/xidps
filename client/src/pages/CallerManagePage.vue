<template>
  <v-card class='pa-5'>
    <custom-modal :is-show='isShow' @close='closeModal'>
      <div>
        <span>발신번호</span>
        <v-text-field dense outlined hide-details></v-text-field>
      </div>
      <div>
        <span>통신서비스 이용가입증명원</span>
        <file-uploader></file-uploader>
      </div>
      <div class='pt-5'>
        <v-radio label='위탁발신번호여부'></v-radio>
        <span class='pt-3'>위탁자 신분증</span>
        <file-uploader></file-uploader>
      </div>
      <div class='pt-5'>
        <span>발신번호 위임장</span>
        <file-uploader></file-uploader>
      </div>
      <v-row dense class='pa-1 pt-5'>
        <v-spacer></v-spacer>
        <v-btn class='light-navy-button'>통신서비스이용증명원 인증 확인</v-btn>
      </v-row>

    </custom-modal>
    <v-btn @click='openModal'>모달</v-btn>
    <v-card-actions>
      <div>
        <span class="fw-semi-bold light-navy-blue fs-3 " data-test="title">발신번호 관리</span>
        <div class="">
          <span class="fs-5 warm-grey fw-regular" data-test="count">TOTAL : 10 건</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <edit-handler-group ></edit-handler-group>
    </v-card-actions>
    <data-grid-view :rows='callerList' :headers='headers'>
      <template v-slot:state-basic="{item}">
        <td>{{ item.manager}}</td>
        <td>{{ item.department }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.memo }}</td>
      </template>
    </data-grid-view>
  </v-card>
</template>

<script lang='ts'>
import DataGridView from '@/components/common/DataTable/DataGridView.vue';
import EditHandlerGroup from '@/components/common/EditHandlerGroup/EditHandlerGroup.vue';
import { CallerManageComposable } from '@/pages/CallerManageComposable';
import CustomModal from '@/components/common/CustomModal/CustomModal.vue';
import { ref } from 'vue';
import { customModalComposable } from '@/components/common/CustomModal/CustomModalComposable';
import FileUploader from '@/components/common/FileUploader/FileUploader.vue';

export default {
  name: 'CallerManagePage',
  components: {
    FileUploader,
    CustomModal,
    EditHandlerGroup,
    DataGridView,
  },
  setup: () => {
    const { callerList, insertNewCaller } = CallerManageComposable();
    const headers = [
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
        changeAble: true,
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
    } = customModalComposable();
    title.value = '발신번호관리';
    return {
      callerList,
      insertNewCaller,
      headers,
      title,
      isShow,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";
</style>
