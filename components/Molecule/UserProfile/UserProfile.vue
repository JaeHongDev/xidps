<template>
  <div>
    <span data-test="unread-notification">{{ representNotificationCount }}</span>
    <v-tooltip v-model="tooltipVisible"  right data-test="remain-message-tooltip" >
      <template v-slot:activator="{ on, attrs }">
        <span data-test="remain-message" @mouseleave="messageVisible=false" @mouseover="messageVisible=true"
              @click="messageFixable=!messageFixable">{{ representMessageCount }}</span>
      </template>
      <span data-test="tooltip-text">1234</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      messageFixable: false,
      messageVisible: false
    }
  },
  props: {
    message: {
      type: Object,
      default: function () {
        return {
          SMS: 0,
          LMS: 0,
          MMS: 0,
          PUSH: 0,
        }
      }
    },
    notification: {
      type: Object,
      default: function () {
        return {
          count: 0
        }
      }
    }
    ,
    unreadNotificationCount: 0,
  },
  computed: {
    representMessageCount() {
      return (this.message.SMS + this.message.LMS + this.message.MMS + this.message.PUSH).toLocaleString("ko-KR") + "건";
    },
    representNotificationCount() {
      return this.notification.count?.toLocaleString("ko-KR") + "개";
    },
    tooltipVisible() {
      return this.messageVisible || this.messageFixable;
    }
  }
}
</script>

<style scoped>

</style>
