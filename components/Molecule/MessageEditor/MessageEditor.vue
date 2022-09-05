<template>
  <v-card class='message-editor'>

    <v-text-field placeholder='(주의: 제목입력시 장문문자로 발송됩니다)'></v-text-field>
    <v-textarea ></v-textarea>
    <div>
      <span class='fs-6 light-navy-blue fw-light'>0/4000byte</span>
      <div class='float-right fs-6 fw-regular light-navy-blue'>
        <span>템플릿 지정하기</span> /
        <span>템플릿 불러오기</span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "MessageEditor"
}
</script>

<style scoped lang='scss'>
.message-editor{
  padding: 24px 40px;
  border-top:  4px solid $light-navy-blue;
}
</style>
