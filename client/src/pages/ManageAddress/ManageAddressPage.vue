<script lang='ts' setup>
import AddressBook from '@/components/domain/AddressBook/AddressBook.vue';
import { reactive } from 'vue';
import { IAddressBook, IAddressInsertPayload, IClickItemPayload } from '@/components/domain/AddressBook/IAddressBook';
import CrudDataTable from '@/components/common/CrudDataTable/CrudDataTable.vue';
import type { ICrudDataTable, IDataGridViewHeader } from '@/components/common/CrudDataTable/ICrudTable';
import { IUserRow, ManageUserComposable } from '@/pages/ManageUser/ManageUserComposable';
import CustomModal from '@/components/common/CustomModal/CustomModal.vue';
import { customModalComposable } from '@/components/common/CustomModal/CustomModalComposable';

interface ManagedAddressPage extends ICrudDataTable {
  addressBook: IAddressBook[],
  index: number,
  findUserHeaders: IDataGridViewHeader[],
  selectedTable: IUserRow[]
}

const data = reactive<ManagedAddressPage>({
  rows: [{}] as IUserRow[],
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
    }] as IDataGridViewHeader[],
  selectedKey: 'key',
  useButtons: {
    useAdd: true,
    useDelete: true,
    useSave: true,
    useSearch: true,
    useImportExcel: true,
    usePersonalizedUser: true,
  },
  usePageable: true,
  useSelector: true,
  tableTitle: '주소록관리',
  selectedTable: [],
  addressBook: [],
  index: 0,

  findUserHeaders: [
    {
      text: 'ID', value: 'id', width: '100px', align: 'center', searchAble: true,
    },
    {
      text: '이름', value: 'name', width: '150px', align: 'center', searchAble: true,
    },
    {
      text: '연락처', value: 'number', width: '150px', align: 'center', searchAble: true,
    },
    {
      text: '구분값', value: 'position', width: '100px', align: 'center', searchAble: true,
    },
  ],
});

const useManageUser = ManageUserComposable();
const importModalSelect = customModalComposable({ isShow: true, title: '' });
const excelImportModal = customModalComposable({ isShow: false, title: '엑셀로 불러오기' });
const userImportModal = customModalComposable({ isShow: false, title: '사용자 추가로 주소록 생성' });
// eslint-disable-next-line no-return-assign
const createDefaultAddress = (): IAddressBook => ({
  id: data.index += 1,
  name: '(제목없음)',
  children: [],
  users: [],
});
const addNewAddressBook = ({ id }: IAddressInsertPayload) => {
  // 부모 선택
  if (id === -1) {
    data.addressBook.push(createDefaultAddress());
  }

  const find = (addressBook: IAddressBook[]) => {
    const findAddress = addressBook.find((address) => address.id === id);
    if (findAddress) {
      findAddress.children.push(createDefaultAddress());
    }

    for (let i = 0; i < addressBook.length; i += 1) {
      const node = addressBook[i];
      if (node.children) {
        find(node.children);
      }
    }
  };
  find(data.addressBook);
};
const updateTableName = (payload:IClickItemPayload | null) => {
  if (payload === null) {
    data.tableTitle = '선택되지 않음';
    useManageUser.rows.value = [];
    return;
  }
  data.tableTitle = payload.item.name;
  useManageUser.rows.value = payload.item.users;
};
</script>

<template>
  <v-row>
    <custom-modal :is-show='importModalSelect.isShow' :title='importModalSelect.title' :width='550' @close='importModalSelect.closeModal()'>
      <v-row>
        <v-col>
          <v-btn class='import-select-btn light-navy-button' @click='importModalSelect.closeModal();userImportModal.openModal()'>
            <div>
              <v-icon size='64'>mdi-file</v-icon>
              <div>엑셀 불러오기</div>
            </div>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class='import-select-btn' @click='importModalSelect.closeModal();userImportModal.openModal()'>
            <div>
              <v-icon size='64'>mdi-account-plus</v-icon>
              <div> 사용자 불러오기</div>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </custom-modal>
    <custom-modal :is-show='userImportModal.isShow' :title='userImportModal.title' :width='680'>
      <v-row>
        <v-col md='3'>
          <v-select solo hide-details></v-select>
        </v-col>
        <v-col>
          <v-text-field hide-details solo></v-text-field>
        </v-col>
      </v-row>
      <div class='table-wrap mt-4'>
        <v-card-actions class='table-wrap-header'>
          <span class='light-navy-blue fs-5 fw-bold'>동아리 공지</span>
          <v-spacer></v-spacer>
          <v-btn class='light-navy-button'>추가하기</v-btn>
        </v-card-actions>
        <v-data-table
          :disable-pagination='true'
          :hide-default-footer='true'
          :height='200'
          :show-select='true'
          :headers='data.findUserHeaders'
          dense
        ></v-data-table>
      </div>
      <div class='mt-4 search-result'>

      </div>
      <v-card-actions>
        <v-spacer> </v-spacer>
        <v-btn class='light-navy-button'>저장하기</v-btn>
      </v-card-actions>
    </custom-modal>
    <v-col md='3'>
      <address-book
        @click:add='addNewAddressBook'
        @click:item='updateTableName'
        :address-items='data.addressBook'
      ></address-book>
    </v-col>
    <v-col md='9'>
      <v-card class='pa-5'>
        <crud-data-table
          :use-selector='data.useSelector'
          :use-pageable='data.usePageable'
          :table-title='data.tableTitle'
          :selected-key='data.selectedKey'
          :headers='data.headers'
          :rows='useManageUser.rows.value'
          :use-buttons='data.useButtons'

          @click:add ='useManageUser.handleUserAdd()'
          @click:import='importModalSelect.openModal()'
        >
        </crud-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang='scss' scoped>
.import-select-btn {
  width: 210px !important;
  height: 200px !important;
  border-radius: 31px !important;
  background-color: $white;
}
.table-wrap{
  border:1px solid #2c347a;
  .table-wrap-header{
    border-bottom:1px solid $light-gray !important;
  }
}
.search-result{
  background-color: $pale-grey;
  height:100px;
  border-radius: 8px;
}
.data-grid-view {
  border-collapse: collapse;
  border-bottom: 1px solid $light-gray;

  ::v-deep .v-data-table-header {
    border-left: none !important;
    border-right: none !important;

    th {
      border-top: 1px solid $light-gray !important;
      border-bottom: 1px solid $warm-grey !important;
      color: $light-navy-blue !important;
      vertical-align: middle !important;
      font-size: $semi-bold;
      text-align: center;
      border-right: 2px solid #d5d5d5;
      border-spacing: 5px;
      margin-right: 5px !important;

      &:last-child {
        border-right: none;
      }
    }
  }

  tbody {
    height: 550px !important;

    tr {
      max-height: 35px !important;

      ::v-deep .v-input {
        margin: 0 !important;
      }
    }

    ::v-deep tr {
      :hover {
        background-color: $pale-lilac !important;
        cursor: pointer;
      }
    }

    tr:hover {
      background-color: $pale-lilac !important;
      cursor: pointer;
    }
  }

  ::v-deep td, th {
    border-bottom: none !important;
    text-align: center;
    //color: $light-navy-blue-color !important;
    vertical-align: middle !important;
    border-right: 2px solid #d5d5d5;
    border-spacing: 5px;
    border-collapse: collapse;

    &:last-child {
      border-right: none;
    }
  }

  td, th {
    //border-right: 1px solid  !important;
    border-bottom: none !important;
    text-align: center;
    //color: $light-navy-blue-color !important;
    vertical-align: middle !important;
    border-right: 2px solid #d5d5d5;
    border-spacing: 5px;
    border-collapse: collapse;

    &:last-child {
      border-right: none;
    }
  }
}

</style>
