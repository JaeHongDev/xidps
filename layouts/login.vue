<template>
  <div>
    <div class="bg-login">
    </div>
  <v-app class="login-wrap" >
    <Nuxt/>
  </v-app>
  </div>

</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped lang="scss">
.login-wrap{
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-login{
  position: absolute ;
  z-index: -1 ;
  top: 0 ;
  bottom: 0 ;
  left: 0 ;
  right: 0 ;
  background-image: url("~/static/login_bg.png") ;
  background-repeat: no-repeat ;
  background-size: cover ;
  height:100vh ;
  opacity: 0.39;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
  flex:none !important;
}
::v-deep .theme--light.v-application{
  background-color:transparent !important;
}

</style>
