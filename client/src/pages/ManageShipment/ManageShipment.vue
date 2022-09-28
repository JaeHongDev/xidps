<script lang='ts' setup>
import CrudDataTable from '@/components/common/CrudDataTable/CrudDataTable.vue';
import { reactive } from 'vue';

const data = reactive({
  date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  menu1: false,
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
      </v-card>
      <v-card>
        <v-card-text>전체발송량</v-card-text>
        <v-card-text>
          <div>
            <span>1200건</span>
            <span>SMS</span>
          </div>
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
        <v-card-actions>
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
        <crud-data-table>
        </crud-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang='scss' scoped>
</style>
