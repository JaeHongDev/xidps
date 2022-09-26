<script lang='ts' setup>
import SelectAddressBook from '@/components/domain/AddressBook/SelectAddressBook.vue';
import { reactive } from 'vue';

const data = reactive({
  headers: [
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
</script>

<template>
  <v-card>
    <v-card-title class='pb-0'>
      <v-row dense>
        <v-col md='1' >
          <div class='right-border'>
          <span class='fs-4 fw-bold light-navy-blue'>수신번호</span>
          </div>
        </v-col>
        <v-col>
          <div>
            <v-chip  class='cornflower'>
              <v-avatar  class='cornflower'>문</v-avatar>
              010-2222-2222
            </v-chip>
          </div>
        </v-col >
        <v-col md='2'>
          <div class='message-counter'>
            <div class='message-counter-viewer d-flex justify-space-around'>
              <div>
                <span>PUSH</span> <br>
                <span>문자</span>
              </div>
              <div class='divider'></div>
              <div>
                <span>1025명</span> <br>
                <span>225명</span>
              </div>
            </div>
            <v-btn class='message-counter-opener mt-2'>메시지 확인하기</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-title class='pt-0 pb-0'>
      <v-divider></v-divider>
    </v-card-title>
    <v-card-title>
      <v-row >
        <v-col md='1'>
          <div class='right-border'>
            <span>텍스트 </span>
          </div>
        </v-col>
        <v-col>
          <span>010-1234-5678</span>
          <v-btn icon><v-icon>mdi-plus</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-title class='pt-0 pb-0'>
      <v-divider></v-divider>
    </v-card-title>
     <v-card-title>
      <v-row >
        <v-col md='1'>
          <div class='right-border'>
          <span>주소록</span>
          </div>
        </v-col>
        <v-col>
          <v-text-field solo  hide-details></v-text-field>
        </v-col>
        <v-col>
          <v-text-field solo  hide-details></v-text-field>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-title class='user-select-wrap'>
      <select-address-book></select-address-book>
      <select-address-book></select-address-book>
      <div class='user-select-table'>
        <v-card-actions class='table-wrap-header'>
          <span class='light-navy-blue fs-5 fw-bold'>동아리 공지</span>
          <v-spacer></v-spacer>
          <v-btn class='light-navy-button'>추가하기</v-btn>
        </v-card-actions>
        <v-data-table
          :disable-pagination='true'
          :hide-default-footer='true'
          :height='310'
          :show-select='true'
          :headers='data.headers'
          dense
        ></v-data-table>
      </div>
    </v-card-title>
  </v-card>
</template>

<style lang='scss' scoped>
.user-select-wrap{
  height:400px;
  .user-select-table{
    border:1px solid $light-gray;
    width:50%;
  }
}
.right-border{
  border-right:1px solid $light-navy-blue;
}

.message-counter{
  .message-counter-viewer{
    border:1px $light-gray solid;
    padding: 11.3px 17.5px 11.8px;
    color: $cornflower;
    font-weight:$semi-bold;
    .divider{
      border:1px solid $light-gray;
    }
  }
  .message-counter-opener{
    width:100%;
  }
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
