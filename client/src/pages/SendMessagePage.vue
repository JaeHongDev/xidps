<template>
  <v-row>
    <custom-modal :is-show="false" :width="1270">
      <select-target-user-viewer></select-target-user-viewer>
    </custom-modal>
    <v-col :offset='800'>
      <span class='fs-2 light-navy-blue fw-bold'>메시지 발송</span>
      <v-card class='mt-3'>
        <v-card-text class='light-navy-blue fw-bold d-flex align-center'>
          <span>발신번호</span> |
          <v-select dense :items="[1]" flat solo hide-details class="none-border-select mb-1">
            <template v-slot:append-item>
              <div class="pa-3">
                <v-btn class="mdi-border-all" icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <span class="light-navy-blue fs-4 fw-semi-bold">공통번호 발신번호 보이기</span>
              </div>
            </template>
          </v-select>
        </v-card-text>
      </v-card>
      <v-card class='mt-3'>
        <v-card-text class='light-navy-blue fw-bold d-flex align-center'>
          <span>수신번호</span> |
          <v-select dense attach v-model="a" chips multiple :items="[1]" flat solo hide-details class="mb-1" readonly>
            <template v-slot:selection>
              <v-chip pill class="user-chip">
              <v-avatar left class="user-chip-type">
                P
              </v-avatar>
              20212487
            </v-chip>
            </template>
          </v-select>
        </v-card-text>
      </v-card>
      <v-card class='message-editor mt-2'>
        <v-card-text>
          <v-text-field dense label='제목없음'></v-text-field>
          <v-textarea v-model='message'>
          </v-textarea>
        </v-card-text>
      </v-card>
      <v-card class='mt-5'>
        <v-card-text class='align-center'>
          <v-row>
            <v-col md='2'><span class='fw-semi-bold fs-4 light-navy-blue text-center'>이미지</span></v-col>
            <v-col cols='8'>
              <v-text-field dense hide-details label='경로'></v-text-field>
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
import { ref } from 'vue';
import CustomModal from '@/components/common/CustomModal/CustomModal.vue';
import SelectTargetUserViewer from '@/components/domain/sendMessage/Organism/SelectTargetUserViewer.vue';

export default {
  name: 'SendMessagePage',
  components: { SelectTargetUserViewer, CustomModal },
  setup: () => {
    const { message, sendMessage } = sendMessageComposable();
    const a = ref([1]);

    return {
      message,
      sendMessage,
      a,
    };
  },
};
</script>

<style scoped lang='scss'>

.message-editor {
  border-top: 5px solid $light-navy-blue;
}

.message-viewer-wrap {
  position: absolute;

  .message-viewer {
    position: absolute;
    top: 100px;
    left: 50px;
    background-color: #308eff;
    width: 230px;
    min-height: 50px;
    max-height: 400px;
    border-radius: 25px;
    padding: 20px;
    color: white;
    font-weight: $semi-bold;
    font-size: $fs6;
  }
}

</style>
