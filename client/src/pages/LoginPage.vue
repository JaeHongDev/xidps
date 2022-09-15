<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <auth-container></auth-container>
    </div>
  </div>
</template>

<script lang="ts">
import AuthContainer from '@/components/domain/auth/organsim/AuthContainer.vue';

export default {
  name: 'LoginPage',
  components: { AuthContainer },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/pages/auth/auth.scss";
</style>
