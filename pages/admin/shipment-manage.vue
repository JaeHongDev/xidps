<template>

  <v-container>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            <v-card-text>구분별 메시지 사용량</v-card-text>
          </v-card-title>
          <v-card-text>
            <message-count-indicator lms="30" sms="50" push="50" mms="50" ></message-count-indicator>
          </v-card-text>
        </v-card>
        <v-card class="mt-4">
          <v-card-title>
            <v-card-text>전체 발송량</v-card-text>
          </v-card-title>
          <v-card-text>
            <message-count-indicator></message-count-indicator>
          </v-card-text>
        </v-card>

      </v-col>
      <v-col md="8">
        <v-card>
          <data-grid-view
            :headers="header"
            :use-pageable="false"
            :use-default-headers="false"
            :use-default-editor="false"
            :use-selector="false"
          ></data-grid-view>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "shipment-manage",
  data() {
    return {
      header: [{
        "value": "date",
        "text": "날짜",
        "align": "center",
        "width": "200px"
      }, {
        "value": "sms",
        "text": "SMS",
        "align": "center",
        "width": "150px",
        "changeAble": true
      }, {
        "value": "lms",
        "text": "LMS",
        "align": "center",
        "width": "150px",
        "changeAble": true
      },
        {
          "value": "mms",
          "text": "MMS",
          "align": "center",
          "width": "150px",
          "changeAble": true
        },
        {
          "value": "push",
          "text": "PUSH",
          "align": "center",
          "width": "150px",
          "changeAble": true
        },
        {
          "value": "count",
          "text": "전체 메세지 수",
          "align": "center",
          "width": "150px",
          "changeAble": true
        }
      ]


    };
  }
};
</script>

<style scoped>

</style>
