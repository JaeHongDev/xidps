<template>
  <div class="d-flex justify-space-around" style="width:350px" >
    <div class="d-flex flex-column align-center salmon">
      <span>{{sms}}건</span>
      <span>PUSH</span>
    </div>
    <div class="d-flex flex-column align-center soft-green">
      <span>{{lms}}건</span>
      <span>PUSH</span>
    </div>
    <div class="d-flex flex-column align-center sun-yellow">
      <span>{{mms}}건</span>
      <span>PUSH</span>
    </div>
    <div class="d-flex flex-column align-center cornflower">
      <span>{{push}}건</span>
      <span>PUSH</span>
    </div>
  </div>
</template>

<script>
const defaultType = {
  type: String | Number,
  default: function() {
    return 0;
  }
};
export default {
  name: "MessageCountIndicator",
  props: {
    push: defaultType,
    lms: defaultType,
    mms: defaultType,
    sms: defaultType
  },
};
</script>

<style scoped>

</style>
