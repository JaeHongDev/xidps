<template>
  <v-app>
    <v-app-bar app color="white">
    </v-app-bar>
    <v-navigation-drawer></v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'PresentLayout',
};
</script>

<style scoped>

</style>
