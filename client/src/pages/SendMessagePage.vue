<template>
  <v-row>
    <v-col :offset='800'>
      <span class='fs-2 light-navy-blue fw-bold' >메시지 발송</span>
      <v-card class='mt-3'>
        <v-card-text class='light-navy-blue fw-bold'>
          <span>발신번호</span> |
          <span>
            정보통신공학부 박상민 051-123-4567</span>
        </v-card-text>
      </v-card>
      <v-card class='mt-3'>
        <v-card-text class='light-navy-blue fw-bold d-flex align-center'>
          <span>수신번호</span> |
          <span class='d-flex align justify-space-around'>
              <v-chip>2021487</v-chip>
              <v-chip>2021487</v-chip>
              <v-chip>2021487</v-chip>
              <v-chip>2021487</v-chip>
              <v-chip>2021487</v-chip>
          </span>
        </v-card-text>
      </v-card>
      <v-card class='message-editor mt-2'>
        <v-card-text >
          <v-text-field dense label='제목없음'></v-text-field>
          <v-textarea v-model='message'>
          </v-textarea>
        </v-card-text>
      </v-card>
      <v-card class='mt-5'>
        <v-card-text>
          <v-row>
            <v-col md='2'><span>이미지</span></v-col>
            <v-col cols='8'>
              <v-text-field dense label='경로'></v-text-field>
            </v-col>
            <v-col col='2'>
              <v-btn class='light-navy-button'>찾기</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <div>
        <v-btn-toggle>
          <v-btn>PUSH</v-btn>
          <v-btn>문자</v-btn>
        </v-btn-toggle>
      </div>
      <div class='message-viewer-wrap'>
        <img src='https://raw.githubusercontent.com/JaeHongDev/xidps/master/static/mobile.png' alt=''/>
        <div class='message-viewer scroll-y-transition overflow-y-auto'>
            <div v-html='sendMessage'></div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import { sendMessageComposable } from '@/pages/SenMessageComposable';

export default {
  name: 'SendMessagePage',
  setup: () => {
    const { message, sendMessage } = sendMessageComposable();
    return {
      message, sendMessage,
    };
  },
};
</script>

<style scoped lang='scss'>

.message-editor{
  border-top:5px solid $light-navy-blue;
}
.message-viewer-wrap{
  position: absolute;
  .message-viewer{
    position: absolute;
    top:100px;
    left:50px;
    background-color: #308eff;
    width:230px;
    min-height:50px;
    max-height:400px;
    border-radius: 25px;
    padding:20px;
    color:white;
    font-weight: $semi-bold;
    font-size: $fs6;
  }
}
</style>
