<template>
  <div class="auth_wrapper">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
};
</script>

<style scoped lang="scss">
.auth_wrapper{
  background-image: url("@/assets/login_bg.png");
  background-repeat: no-repeat;
  background-size:cover;
}
</style>
