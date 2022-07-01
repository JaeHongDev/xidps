<template>
  <v-app>
    <Header/>
    <v-main>
      <!-- Provides the application the proper gutter -->
        <side-menus class="xidps-navigation"/>
        <div class="xidps-main-container">
          <NotificationProvider />
          <Nuxt class="pt-3"/>
        </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
.v-application{
}
.xidps-navigation{
  position: fixed;
  left: 0;
  top: 64px;
  bottom: 0;
  z-index: 100;
}
  .xidps-main-container{
    margin-left:310px;
    padding:20px 80px;

  }
</style>
