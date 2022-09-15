<template>
  <v-app >
    <present-layout v-if="isLoggedIn"></present-layout>
    <login-layout v-else></login-layout>
  </v-app>
</template>

<script lang="ts">
import Vue, { ref } from 'vue';
import PresentLayout from '@/layouts/PresentLayout/PresentLayout.vue';
import LoginLayout from '@/layouts/LoginLayout/LoginLayout.vue';

export default Vue.extend({
  name: 'App',
  components: { PresentLayout, LoginLayout },
  setup: () => {
    const isLoggedIn = ref(true);
    return { isLoggedIn };
  },
});
</script>

<style lang="scss" scoped>
.v-application {
  font-family: SUIT, serif;
}
</style>
