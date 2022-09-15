<template>
  <v-app >
    <login-layout></login-layout>
    <!--<present-layout></present-layout> -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import PresentLayout from '@/layouts/PresentLayout/PresentLayout.vue';
import LoginLayout from '@/layouts/LoginLayout/LoginLayout.vue';

export default Vue.extend({
  name: 'App',
  components: { LoginLayout },
  data: () => ({
    //
  }),
});
</script>

<style lang="scss" scoped>
.v-application {
  font-family: SUIT, serif;
}
</style>
