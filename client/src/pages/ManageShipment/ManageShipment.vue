<script lang='ts' setup>
import CrudDataTable from '@/components/common/CrudDataTable/CrudDataTable.vue';
import { reactive } from 'vue';
import BarChart from '@/components/common/Chart/BarChart.vue';
import MessageCountIndicator from '@/components/domain/ManageShipment/MessageCountIndicator/MessageCountIndicator.vue';

const data = reactive({
  date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  menu1: false,
  header: [{
    value: 'date',
    text: '날짜',
    align: 'center',
    width: '200px',
  }, {
    value: 'sms',
    text: 'SMS',
    align: 'center',
    width: '150px',
  }, {
    value: 'lms',
    text: 'LMS',
    align: 'center',
    width: '150px',
  },
  {
    value: 'mms',
    text: 'MMS',
    align: 'center',
    width: '150px',
  },
  {
    value: 'push',
    text: 'PUSH',
    align: 'center',
    width: '150px',
  },
  {
    value: 'count',
    text: '전체 메세지 수',
    align: 'center',
    width: '150px',
  }],

});
</script>

<template>
  <v-row>
    <v-col cols='4'>
      <v-card class='pa-5'>
        <v-card-actions>
          <span class='fs-6 light-navy-blue'>구분별 메시지 사용량</span>
          <v-spacer></v-spacer>
          <v-select solo dense hide-details :value='[1,2,3,4]'></v-select>
        </v-card-actions>
        <v-card-text>
          <bar-chart></bar-chart>
        </v-card-text>
        <v-card-text>
          <message-count-indicator :lms="1200" :sms="1200" :mms="1200" :push="1200"></message-count-indicator>
        </v-card-text>
      </v-card>
      <v-card class="mt-5">
        <v-card-text>전체발송량</v-card-text>
        <v-card-text>
          <message-count-indicator :lms="1200" :sms="1200" :mms="1200" :push="1200"></message-count-indicator>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols='8'>
      <v-card class='pa-5'>
        <v-card-actions>
          <span>발송량 내역</span>
          <v-spacer></v-spacer>
          <span>엑셀로 내려받기</span>
        </v-card-actions>
        <v-card-actions class="pt-0 pb-0">
          <v-radio-group :value='["일별", "월별", "개인별"]'></v-radio-group>
          <v-spacer></v-spacer>
          <v-menu
            ref="menu1"
            v-model="data.menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Date"
                solo
                hint="MM/DD/YYYY format"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              @input="data.menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-card-actions>
        <v-card-text>
          <v-data-table :footer-props='{"items-per-page-options": [20]}'
                        class="data-grid-view"
                        :height="700"
                        :headers="data.header"
                        :disable-pagination="true"
                        hide-default-footer
                        dense>
            <template v-slot:[`body.prepend`]>
              <tr class="text-center">
                <td>초과금액</td>
                <td>4,375</td>
                <td>2,111</td>
                <td>2,000</td>
                <td>2,333</td>
                <td>1,000,000</td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang='scss' scoped>
</style>
