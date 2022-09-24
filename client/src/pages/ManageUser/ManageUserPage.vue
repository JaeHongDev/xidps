<template>
  <div>
    <v-card class='division-setting'>
      <v-card-title>
        <span class='fs-4'>구분값 설정</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col mb='8' sm='2' style='flex-basis: 300px'>
            <v-select dense hide-details outlined></v-select>
          </v-col>
          <v-col v-for='i in [1,2,3,4]' style='flex-basis: 300px' :key='i'>
            <div class='d-flex'>
              <v-radio label='PUSH'></v-radio>
              <v-text-field suffix='건' dense hide-details label='3000'  class='mb-2' @click:append='handleClickAddBtn'></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class='mt-5'>
      <v-card-actions>
        <v-spacer></v-spacer>
        <edit-handler-group @click:add='handleClickAddBtn'  ></edit-handler-group>
      </v-card-actions>
      <v-card-title>
        <data-grid-view
          :headers='headers'
          :rows='rows'
        >
          <template #state-basic='{item}' >
            <td>{{item.key}}</td>
            <td>{{item.name}}</td>
            <td>{{item.number}}</td>
            <td>{{item.position}}</td>
            <td>{{item.var1}}</td>
            <td>{{item.var2}}</td>
            <td>{{item.var3}}</td>
            <td>{{item.var4}}</td>
          </template>
        </data-grid-view>
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang='ts'>
import EditHandlerGroup from '@/components/common/EditHandlerGroup/EditHandlerGroup.vue';
import DataGridView, { IDataGridViewHeader } from '@/components/common/DataTable/DataGridView.vue';
import { EditStatus, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';
import { ref } from 'vue';

export interface IUserRow extends IBasicRows{
  userId: string;
  name: string;
  phoneNumber:string;
  divisionValue: string;
  var1: string;
  var2: string;
  var3: string;
  var4: string;
}

export default {
  name: 'ManageUserPage',
  components: { DataGridView, EditHandlerGroup },
  setup: () => {
    const headers: Array<IDataGridViewHeader> = [
      {
        text: 'ID', value: 'id', width: '100px', align: 'center', searchAble: true, class: 'frozen-table-column', sortable: false,
      },
      {
        text: '이름', value: 'name', width: '200px', align: 'center', searchAble: true,
      },
      {
        text: '연락처', value: 'number', width: '200px', align: 'center', searchAble: true,
      },
      {
        text: '구분값', value: 'position', width: '200px', align: 'center', searchAble: true,
      },
      {
        text: '변수1', value: 'var1', width: '200px', align: 'center', searchAble: true,
      },
      {
        text: '변수2', value: 'var2', width: '200px', align: 'center', searchAble: true,
      },
      {
        text: '변수3', value: 'var3', width: '200px', align: 'center', searchAble: true,
      },
      {
        text: '변수4', value: 'var4', width: '200px', align: 'center', searchAble: true,
      },
      {
        text: '관리', value: '', width: '150px', align: 'center', searchAble: false,
      }];
    const rows = ref<Array<IUserRow>>([]);
    let key = 0;
    // eslint-disable-next-line no-return-assign
    const createNewUserRows = (): IUserRow => ({
      key: key += 1,
      editStatus: EditStatus.UNEDITTING,
      inputStatus: EInputStatus.INSERT,
      userId: '',
      name: '',
      phoneNumber: '',
      divisionValue: '',
      var1: '',
      var2: '',
      var3: '',
      var4: '',
    });

    const handleClickAddBtn = () => {
      rows.value.unshift(createNewUserRows());
    };

    return {
      headers,
      rows,
      handleClickAddBtn,
    };
  },
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";
.division-setting{
  min-height:150px;
  span{
    color: $light-navy-blue;;
  }
}
::v-deep input{
  text-align: right;
}

</style>
