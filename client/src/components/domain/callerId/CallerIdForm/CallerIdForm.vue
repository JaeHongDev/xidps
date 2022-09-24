<script lang='ts' setup>

import FileUploader from '@/components/common/FileUploader/FileUploader.vue';
</script>

<template>
  <div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class='light-navy-button'>통신서비스이용증명원 인증</v-btn>
      <v-btn class='light-navy-button'>전화 인증</v-btn>
    </v-card-actions>
    <div>
      <span>발신번호</span>
      <v-text-field dense outlined hide-details></v-text-field>
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
      <v-btn class='light-navy-button'>통신서비스이용증명원 인증 확인</v-btn>
    </v-row>
  </div>
</template>

<style lang='scss' scoped>
</style>
