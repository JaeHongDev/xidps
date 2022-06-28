<template>
  <Auth></Auth>
</template>

<script>
export default {
  name: "auth",
  layout:"login",
  data(){
    return {
      token:this.$store.state.auth.token
    }
  },
  watch:{
    token:function(){
      location.href="/index";
    }
  }
}
</script>

<style scoped lang="scss">

</style>
