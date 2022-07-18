<template>
  <v-card>
    <v-card-text>
      <span>구분값 설정(1인 기준)</span>
    </v-card-text>

    <v-card-text>
      <div class='d-flex align-center justify-space-between'>
        <div style='width: 300px'>
          <v-select
            :items='extractMessages'
            @change='changeSelect'
            data-test='division-select'
            dense
            hide-details
            solo></v-select>
        </div>

        <div class='d-flex justify-space-around align-center'>
          <div class='d-flex px-10'>
            <v-checkbox label='PUSH' @change='disables.PUSH = !disables.PUSH'></v-checkbox>
            <v-text-field class='message-input' suffix='건' data-test='message-input' v-model='messageCount.PUSH'
                          :disabled='disables.PUSH'/>
          </div>
          <div class='d-flex px-10'>
            <v-checkbox label='SMS' @change='disables.SMS = !disables.SMS'></v-checkbox>
            <v-text-field class='message-input' suffix='건' data-test='message-input' v-model='messageCount.SMS'
                          :disabled='disables.SMS'/>
          </div>
          <div class='d-flex px-10'>
            <v-checkbox label='LMS' @change='disables.LMS = !disables.LMS'></v-checkbox>
            <v-text-field class='message-input' suffix='건' data-test='message-input' v-model='messageCount.LMS'
                          :disabled='disables.LMS'/>
          </div>
          <div class='d-flex px-10'>
            <v-checkbox label='MMS' @change='disables.MMS = !disables.MMS'></v-checkbox>
            <v-text-field class='message-input' suffix='건' data-test='message-input' v-model='messageCount.MMS'
                          :disabled='disables.MMS'/>
          </div>
          <v-btn>저장</v-btn>
        </div>

      </div>
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
      disables:this.createDefaultDisablesSetting(),
      messageCount: {
        PUSH: 0,
        SMS: 0,
        LMS: 0,
        MMS: 0,
      }
    }
  },

  methods: {
    createDefaultDisablesSetting() {
      return {
        PUSH: true,
        SMS: true,
        LMS: true,
        MMS: true,
      }
    },
    changeSelect(division) {
      this.messageCount = Object.assign(this.settings.find(setting => setting.division === division).message, {});

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
.message-input {
  width: 100px !important;

  ::v-deep input {
    text-align: right;
  }
}
</style>
