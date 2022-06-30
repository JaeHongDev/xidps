<template>
  <div class="xidps-notification-wrap">
    <v-card class="xidps-notification-warning">
      <v-icon>
        mdi-warn
      </v-icon>
      <span>
        {{notification.warn}}
      </span>
    </v-card>
    <div class="xidps-notification-notice">
      <item-selector class="" :items="notification.notice"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "NotificationProvider",
  props: {
    notification: {
      type:Array,
      default:function(){
        return {
          warn: "긴급) 2022년 5월 12일 2시~3시 서버장애 안내 - 해결완료되었습니다.",
          notice: [
            {id: 1, value: "🥵덥디 더운 여름😎 SUMMER EVENT 진행중🎉 구독형 메시지 서비스를 최저가로 만나보세요~✨"},
            {id: 2, value: "🥵덥디 더운 가을😎 AUTUMN EVENT 진행중🎉 구독형 메시지 서비스를 최저가로 만나보세요~✨"},
            {id: 3, value: "🥵덥디 더운 겨울😎 WINTER EVENT 진행중🎉 구독형 메시지 서비스를 최저가로 만나보세요~✨"},
          ]
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.xidps-notification-wrap {
  .xidps-notification-warning {
    height: 48px;
    padding: 15px;
    border-radius: 0 !important;
    border: 1px solid #ff0000;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16) !important;
  }

  .xidps-notification-notice {
    padding-top: 20px;
    height: 48px !important;
  }
}
</style>
