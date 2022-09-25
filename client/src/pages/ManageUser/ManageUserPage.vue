<script lang='ts' setup>
import CrudDataTable from '@/components/common/CrudDataTable/CrudDataTable.vue';
import { ManageUserComposable } from '@/pages/ManageUser/ManageUserComposable';

const headers = [
  {
    text: 'ID', value: 'id', width: '100px', align: 'center', searchAble: true,
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
// eslint-disable-next-line no-return-assign

const {
  editUser, rows, handleEditEnd, handleEditStart, handleEditCancel, handleUserAdd,
} = ManageUserComposable();

</script>
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
              <v-text-field suffix='건' dense hide-details label='3000' class='mb-2' ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class='mt-5'>
      <crud-data-table
        class='pa-3'
        :headers='headers'
        :rows='rows'
        :use-selector='true'
        :use-pageable='true'
        table-title='사용자관리'
        @click:add='handleUserAdd'
      >
        <template #state-edit='{item}'>
          <td>{{item.userId}}</td>
          <td><v-text-field dense outlined hide-details v-model='editUser.name' :value='item.name'></v-text-field></td>
          <td><v-text-field dense outlined hide-details v-model='editUser.phoneNumber' :value='item.phoneNumber'></v-text-field></td>
          <td><v-text-field dense outlined hide-details v-model='editUser.divisionValue' :value='item.divisionValue'></v-text-field></td>
          <td><v-text-field dense outlined hide-details v-model='editUser.var1' :value='item.var1'></v-text-field></td>
          <td><v-text-field dense outlined hide-details v-model='editUser.var2' :value='item.var2'></v-text-field></td>
          <td><v-text-field dense outlined hide-details v-model='editUser.var3' :value='item.var3'></v-text-field></td>
          <td><v-text-field dense outlined hide-details v-model='editUser.var4' :value='item.var4'></v-text-field></td>
          <td>
            <v-btn @click="handleEditEnd(item.key)" icon>
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn @click="handleEditCancel(item.key)" icon>
              <v-icon>mdi-cancel</v-icon>
            </v-btn>
          </td>
        </template>
        <template #state-basic='{item}'>
          <td>{{item.userId}}</td>
          <td>{{item.name}}</td>
          <td>{{item.phoneNumber}}</td>
          <td>{{item.divisionValue}}</td>
          <td>{{item.var1}}</td>
          <td>{{item.var2}}</td>
          <td>{{item.var3}}</td>
          <td>{{item.var4}}</td>
          <td>
            <v-btn @click="handleEditStart(item.key)" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </template>
      </crud-data-table>
    </v-card>
  </div>
</template>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";

.division-setting {
  min-height: 150px;

  span {
    color: $light-navy-blue;;
  }
}

</style>
