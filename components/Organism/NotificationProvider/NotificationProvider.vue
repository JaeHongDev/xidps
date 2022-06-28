<template>
  <div class="xidps-notification-wrap">
    <v-card class="xidps-notification-warning">
      <v-icon>
        mdi-warn
      </v-icon>
      <span>
        긴급) 2022년 5월 12일 2시~3시 서버장애 안내 - 해결완료되었습니다.
      </span>
    </v-card>
    <div class="xidps-notification-notice">
    <item-selector class=""/>
    </div>

  </div>
</template>

<script>
export default {
  name: "NotificationProvider"
}
</script>

<style scoped lang="scss">
  .xidps-notification-wrap{
    .xidps-notification-warning{
      height:48px;
      padding:15px;
      border-radius: 0 !important;
      border:1px solid #ff0000;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16) !important;
    }
    .xidps-notification-notice{
      padding-top:20px;
      height:48px !important;
    }
  }
</style>
