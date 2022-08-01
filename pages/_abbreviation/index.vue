<template>
  <div class="foo">
    {{nowPage}}
  </div>
</template>

<script>
export default {
  name: "index",
  layout: "login",
  computed:{
    nowPage(){
      return this.$route.params
    }
  }
};
</script>

<style scoped>

</style>
