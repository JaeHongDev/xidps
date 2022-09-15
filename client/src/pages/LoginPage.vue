<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <auth-container :user='authInformation' @click:login='login' ></auth-container >
    </div>
  </div>
</template>

<script lang="ts">
import AuthContainer from '@/components/domain/auth/organsim/AuthContainer.vue';
import { LoginPageComposable } from '@/pages/LoginPageCompsable';

export default {
  name: 'LoginPage',
  components: { AuthContainer },
  setup: () => {
    const { authInformation, login } = LoginPageComposable();
    return {
      authInformation, login,
    };
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/pages/auth/auth.scss";
</style>
