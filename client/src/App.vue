<template>
  <v-app >
    <present-layout v-if="isLoggedIn"></present-layout>
    <login-layout v-else></login-layout>
  </v-app>
</template>

<script lang="ts">
import Vue, { ref, watch } from 'vue';
import PresentLayout from '@/layouts/PresentLayout/PresentLayout.vue';
import LoginLayout from '@/layouts/LoginLayout/LoginLayout.vue';
import { useAuthStore } from '@/store/auth';

export default Vue.extend({
  name: 'App',
  components: { PresentLayout, LoginLayout },
  setup: () => {
    const authStore = useAuthStore();
    const isLoggedIn = ref(authStore.isLoggedIn());

    watch(() => authStore.$state.user, () => {
      isLoggedIn.value = authStore.isLoggedIn();
    });

    return { isLoggedIn };
  },
});
</script>

<style lang="scss" scoped>
.v-application {
  font-family: SUIT, serif;
}
</style>
