<script lang='ts' setup>
import FileUploader from '@/components/common/FileUploader/FileUploader.vue';
import { computed, reactive, defineEmits } from 'vue';

interface ICallerIdForm {
  isFileCertification: boolean; // 파일인증
  isConsignmentCertification: boolean; // 위탁인증
  isApiCertification: boolean;
  callerNumber: string;
}

const state = reactive<ICallerIdForm>({
  isConsignmentCertification: false,
  isApiCertification: false,
  isFileCertification: false,
  callerNumber: '',
});
const emit = defineEmits<{(e:'approve:number', callerNumber:string):void}>();

function selectFileCertification() {
  state.isFileCertification = true;
}
function selectApiCertification() {
  state.isApiCertification = true;
}
function approveCaller() {
  state.isApiCertification = false;
  state.isConsignmentCertification = false;
  state.isFileCertification = false;
  emit('approve:number', state.callerNumber);
  state.callerNumber = '';
}
const selectionMode = computed(() => !(state.isConsignmentCertification || state.isFileCertification || state.isFileCertification));

</script>

<template>
  <div>
    <v-card-actions v-show="selectionMode">
      <v-spacer></v-spacer>
      <v-btn class='light-navy-button' @click="selectFileCertification">통신서비스이용증명원 인증</v-btn>
      <v-btn class='light-navy-button' @click="selectFileCertification">전화 인증</v-btn>
    </v-card-actions>
    <div v-show="!selectionMode">
      <div>
        <span>발신번호</span>
        <v-text-field v-model="state.callerNumber" dense outlined hide-details></v-text-field>
      </div>
      <div>
        <span>통신서비스 이용가입증명원</span>
        <file-uploader></file-uploader>
      </div>
      <div class='pt-5'>
        <v-radio label='위탁발신번호여부'></v-radio>
        <span class='pt-3'>위탁자 신분증</span>
        <file-uploader></file-uploader>
      </div>
      <div class='pt-5'>
        <span>발신번호 위임장</span>
        <file-uploader></file-uploader>
      </div>
      <v-row dense class='pa-1 pt-5'>
        <v-spacer></v-spacer>
        <v-btn class='light-navy-button' @click="approveCaller">통신서비스이용증명원 인증 확인</v-btn>
      </v-row>
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
