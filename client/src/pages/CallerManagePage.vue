<template>
  <v-card class='pa-3'>
    <edit-handler-group ></edit-handler-group>
    <v-btn @click='insertNewCaller'>추가</v-btn>
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

export default {
  name: 'CallerManagePage',
  components: {
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
    return {
      callerList,
      insertNewCaller,
      headers,
    };
  },
};
</script>

<style scoped>

</style>
