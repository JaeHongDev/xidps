<template>
  <v-row class='pt-3'>
    <v-col cols='12' md='10' >
      <div class='file-list'>
      </div>
    </v-col>
    <v-col style='flex-basis: 100px'>
      <v-btn>파일 업로드</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FileUploader',
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";
.file-list{
  border:1px solid #cbcbcb;
  height: 58px;
}
.v-btn{
  width:100%;
  height:100% !important;
}
</style>
