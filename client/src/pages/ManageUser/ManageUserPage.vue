<script lang='ts' setup>
import CrudDataTable from '@/components/common/CrudDataTable/CrudDataTable.vue';
import { ICrudDataTable } from '@/components/common/CrudDataTable/ICrudTable';
import { EditStatus, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';
import { reactive } from 'vue';

interface IEditUser {
  name: string;
  phoneNumber: string;
  divisionValue: string;
  var1: string;
  var2: string;
  var3: string;
  var4: string
}

interface IUserRow extends IBasicRows, IEditUser {
  userId: string;
}

interface IManageUserPage {
  editUser: IEditUser,
  table: ICrudDataTable,
  index: number
}

function createDefaultEditUser(): IEditUser {
  return {
    name: '',
    phoneNumber: '',
    divisionValue: '',
    var1: '',
    var2: '',
    var3: '',
    var4: '',
  };
}

const state = reactive<IManageUserPage>({
  table: {
    rows: [],
    headers: [
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
      }],
    usePageable: true,
    tableTitle: '사용자 관리',
    selectedKey: 'key',
    useSelector: true,
    useButtons: {
      useAdd: true,
      useSave: true,
      useDelete: true,
      useSearch: true,
      useImportExcel: true,
      usePersonalizedUser: true,
    },
  },
  editUser: createDefaultEditUser(),
  index: 0,
});

function createDefaultUser(): IUserRow {
  // eslint-disable-next-line no-return-assign
  return {
    key: state.index += 1,
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
  };
}

function handleAddUser() {
  state.table.rows.unshift(createDefaultUser());
}

function findIndexByKey(key: number) {
  return state.table.rows.findIndex((user) => user.key === key);
}

function handleEditStart(key: number) {
  const findIndex = findIndexByKey(key);
  const findUser = state.table.rows[findIndex] as IUserRow;
  findUser.editStatus = EditStatus.EDITING;
  Object.assign(state.editUser, {
    ...findUser as IEditUser,
  });
}

function handleEditEnd(key: number) {
  const findIndex = findIndexByKey(key);
  Object.assign(state.table.rows[findIndex], {
    ...state.editUser,
    inputStatus: state.table.rows[findIndex].inputStatus === EInputStatus.SELECT && EInputStatus.UPDATE,
    editStatus: EditStatus.UNEDITTING,
  });
}

function handleEditCancel(key: number) {
  const findIndex = findIndexByKey(key);
  state.table.rows[findIndex].editStatus = EditStatus.UNEDITTING;
}

function handleSave() {
  state.table.rows.forEach((row) => {
    Object.assign(row, { inputStatus: EInputStatus.SELECT });
  });
}

function handleRemove(keys:IUserRow[]) {
  keys.reverse().forEach((caller) => {
    state.table.rows.splice(state.table.rows.indexOf(caller), 1);
  });
}
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
              <v-text-field suffix='건' dense hide-details label='3000' class='mb-2'></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class='mt-5'>
      <crud-data-table
        class='pa-3'
        :use-buttons="state.table.useButtons"
        :table-title="state.table.tableTitle"
        :rows="state.table.rows"
        :selected-key="state.table.selectedKey"
        :headers="state.table.headers"
        :use-selector='true'
        :use-pageable='true'

        @click:add='handleAddUser'
        @click:save="handleSave"
        @click:remove="handleRemove"
      >
        <template #state-edit='{item}'>
          <td>{{ item.userId }}</td>
          <td>
            <v-text-field dense outlined hide-details v-model='state.editUser.name' :value='item.name'></v-text-field>
          </td>
          <td>
            <v-text-field dense outlined hide-details v-model='state.editUser.phoneNumber' :value='item.phoneNumber'></v-text-field>
          </td>
          <td>
            <v-text-field dense outlined hide-details v-model='state.editUser.divisionValue' :value='item.divisionValue'></v-text-field>
          </td>
          <td>
            <v-text-field dense outlined hide-details v-model='state.editUser.var1' :value='item.var1'></v-text-field>
          </td>
          <td>
            <v-text-field dense outlined hide-details v-model='state.editUser.var2' :value='item.var2'></v-text-field>
          </td>
          <td>
            <v-text-field dense outlined hide-details v-model='state.editUser.var3' :value='item.var3'></v-text-field>
          </td>
          <td>
            <v-text-field dense outlined hide-details v-model='state.editUser.var4' :value='item.var4'></v-text-field>
          </td>
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
          <td>{{ item.userId }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phoneNumber }}</td>
          <td>{{ item.divisionValue }}</td>
          <td>{{ item.var1 }}</td>
          <td>{{ item.var2 }}</td>
          <td>{{ item.var3 }}</td>
          <td>{{ item.var4 }}</td>
          <td>
            <v-btn @click="handleEditStart(item.key)" icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
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
