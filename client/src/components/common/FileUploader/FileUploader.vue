<script lang="ts" setup>

import { defineProps, withDefaults } from 'vue';
import { IFileUpload } from '@/components/common/commonType';

interface Props{
  fileUploader?: IFileUpload
}
const props = withDefaults(defineProps<Props>(), {
  fileUploader: () => ({
    limitFileSize: 4000,
    fileType: 'EXCEL',
  }),
});
</script>
<template>
  <v-row class='pt-3'>
    <v-col cols='10' md='9' >
      <div class='file-list'>
        <div class="file-viewer"></div>
        <div class="file-sizer fs-6">
          0KB / 4000KB
        </div>
      </div>
    </v-col>
    <v-col cols="2" md="3">
      <v-btn v-show="props.fileUploader.fileType === 'EXCEL'" class="grassh-green" outlined>
        <v-icon >mdi-microsoft-excel</v-icon>
        <span>엑셀 샘플 다운로드</span>
      </v-btn>
      <v-btn v-show="props.fileUploader.fileType === 'EXCEL' " outlined class="mt-3">
        <v-icon class="grassh-green">mdi-file</v-icon>
        <span>엑셀 업로드</span>
      </v-btn>
      <v-btn v-show="props.fileUploader.fileType === 'PDF'" outlined >
        <v-icon class="grassh-green">mdi-file</v-icon>
        <span>파일 업로드</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped lang='scss'>
$grassh-green: #2c9700;
.grassh-green {
  color: $grassh-green !important;
}
.file-list{
  border:1px solid #cbcbcb;
  height: 83px;
  .file-viewer{
    height:60px;
    overflow-y:auto;
  }
  .file-sizer{
    height:21px;
    background-color: #eeeeee;
    text-align:right;
  }

}
.v-btn{
  width:100%;
  height:100%;
}
</style>
