<template>
  <div class="xidps-userprofile-wrap">
    <div class="xidps-userprofile">
      <v-avatar >
        <img
          :src="avatar"
          alt="John">
      </v-avatar>
      <span class="fs-7 fw-bold pt-3">{{ companyName }}</span>
      <div>
        <span class="fs-4 fw-regular">반갑습니다 <span class="fs-3 fw-bold">{{username}}</span> 님</span>
      </div>
      <v-divider class="bg-white"></v-divider>
      <div>
        <span class="fw-regular fs-5">로그아웃</span>
      </div>
    </div>
    <div class="xidps-unread-notification">
      <span class="fs-6">읽지 않은 알림</span>
      <span data-test="unread-notification">{{ representNotificationCount }}</span>
    </div>
    <div class="xidps-remain-message">
      <span class="fs-6">남은 메시지 수</span>
      <v-tooltip v-model="tooltipVisible"  right data-test="remain-message-tooltip" >
        <template v-slot:activator="{ on, attrs }">
        <span data-test="remain-message" @mouseleave="messageVisible=false" @mouseover="messageVisible=true"
              @click="messageFixable=!messageFixable">{{ representMessageCount }}</span>
        </template>
        <span data-test="tooltip-text">
          <div><span>SMS {{ concatMessageCount(message.SMS) }} LMS {{concatMessageCount(message.LMS)}}</span></div>
          <div>MMS {{concatMessageCount(message.MMS)}}  PUSH {{concatMessageCount(message.PUSH)}}</div>
        </span>
      </v-tooltip>
    </div>

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
    },
    unreadNotificationCount: 0,
    username:"",
    companyName:"",
    avatar:{
      type:String ,
      default:function(){
        return "https://cdn.vuetifyjs.com/images/john.jpg";
      }
    },

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
    },

  },
  methods:{
    concatMessageCount(count){
      return count.toLocaleString("ko-KR") + "건";
    }
  }
}
</script>

<style scoped lang="scss">
  .xidps-userprofile-wrap{
    width:310px;
    background-color:$dark-indigo ;
    color:$white;
    padding-top:25px;
    padding-bottom:25px;
    .xidps-userprofile{
      padding-left:55px;
      padding-right:55px;

      display:flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .xidps-unread-notification{
    display:flex;
    justify-content: space-between;
    padding:20px 20px 0px 20px;
  }

  .xidps-remain-message{
    display: flex;
    justify-content: space-between;
    padding:0px 20px;
  }
</style>
