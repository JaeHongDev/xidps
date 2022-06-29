<template>
  <v-app>
    <Header app/>

    <v-main>
      <!-- Provides the application the proper gutter -->
        <side-menus class="xidps-navigation"/>
        <div class="xidps-main-container">

          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
          <NotificationProvider />
        </div>

        <!-- If using vue-router -->
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="scss">
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
