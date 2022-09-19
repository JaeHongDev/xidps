<template>
  <v-card class='pa-5'>
    <custom-modal :is-show='openModal'></custom-modal>
    <v-btn @click='handleOpenModal'>모달</v-btn>
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

export default {
  name: 'CallerManagePage',
  components: {
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
    const openModal = ref(false);
    // eslint-disable-next-line no-return-assign
    const handleOpenModal = () => {
      openModal.value = true;
      return openModal.value;
    };
    return {
      callerList,
      insertNewCaller,
      headers,
      openModal,
      handleOpenModal,
    };
  },
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";
</style>
