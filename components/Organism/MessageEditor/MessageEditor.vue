<template>
  <v-row>
    <v-col cols='8'>
      <message-editor-body></message-editor-body>
    </v-col>
    <v-col>
      <v-card class='message-editor__variables_wrap'>
        <div>
          <span>변수</span>
        </div>
        <div class='pt-7'>
          <v-btn class='variable_btn'>이름</v-btn>
          <v-btn class='variable_btn'>학번</v-btn>
          <v-btn class='variable_btn'>학번</v-btn>
          <v-btn class='variable_btn'>학번</v-btn>
          <v-btn class='variable_btn'>학번</v-btn>
          <v-btn class='variable_btn'>학번</v-btn>
          <v-btn class='variable_btn'>학번</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MessageEditor"
}
</script>

<style scoped lang='scss'>

.message-editor__variables_wrap{
  padding: 17px 15px 41px;
}

.variable_btn{
  width: 124px !important;
  height: 36px !important;
  padding: 9px 51px 11px !important;
  margin-top:10px;
}
</style>
