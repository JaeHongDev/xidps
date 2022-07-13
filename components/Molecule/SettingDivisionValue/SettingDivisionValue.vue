<template>
  <v-card>
    <v-card-text>
      <span>구분값 설정(1인 기준)</span>
    </v-card-text>

    <v-card-text>
      <v-row>
        <v-col cols='1'>
          <v-select
            :items='extractMessages'
            @select='changeSelect'
            data-test='division-select'
            solo></v-select>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols='10'>
          <v-row align='center'>
            <v-checkbox label='PUSH'></v-checkbox>
            <v-text-field suffix='건' data-test='message-input' v-model='messageCount.PUSH'/>
            <v-checkbox></v-checkbox>
            <v-text-field data-test='message-input' v-model='messageCount.PUSH'/>
            <v-checkbox></v-checkbox>
            <v-text-field data-test='message-input' v-model='messageCount.PUSH'/>
            <v-checkbox></v-checkbox>
            <v-text-field data-test='message-input' v-model='messageCount.PUSH'/>
            <v-btn>저장</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "SettingDivisionValue",
  props: {
    settings: {
      type: Array,
      default: function () {
        return [
          {
            division: "학생",
            message: {
              PUSH: 1000,
              SMS: 1000,
              LMS: 1000,
              MMS: 1000
            }
          }
        ]
      }
    },
  },

  data() {
    return {
      messageCount: {
        PUSH: 1,
        SMS: 0,
        LMS: 1,
        MMS: 0,
      }
    }
  },

  methods: {
    changeSelect(index) {
      this.messageCount.PUSH = this.settings[index].PUSH;
    }
  },
  computed: {
    extractMessages() {
      const data = this.settings.map(setting => {
        return setting.division
      })
      return data;
    }
  },
}
</script>

<style scoped lang='scss'>
::v-deep .v-text--field{
  width:40px !important;
}
</style>
