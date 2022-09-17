<template>
  <v-app>
    <v-app-bar app class="none" >
    </v-app-bar>
    <v-navigation-drawer app class="light-navy-blue" :disable-resize-watcher="true" width="310">
      <!-- Navigation Header -->
      <div class="navigation-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
        <div>
          <v-icon color="white">mdi-send</v-icon>
          <span class='ml-3 fw-bold fs-3'>XID 메시징 서비스</span>
        </div>
      </div>
      <div class="navigation--user-profile">

      </div>
      <navigation-menu></navigation-menu>
    </v-navigation-drawer>
    <v-main class='mt-10 ml-10'>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue, { reactive, ref } from 'vue';
import { NavigationComposable } from '@/layouts/PresentLayout/Navigation/NavigationComposable';
import NavigationMenuGroup from '@/layouts/PresentLayout/Navigation/NavigationMenuGroup.vue';
import NavigationMenu from '@/layouts/PresentLayout/Navigation/NavigationMenu.vue';

export default Vue.extend({
  name: 'PresentLayout',
  components: { NavigationMenu },
  setup: () => {
    const { listItems } = NavigationComposable();
    return {
      listItems,
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";

.v-application {
  .v-app-bar {
    background-color: $light-navy-blue !important;
  }

  .v-navigation-drawer {
    background-color: $light-navy-blue;
    color:$white !important;

    .navigation-header{
      height:64px;
    }
    .navigation--user-profile{
      background-color:$dark-indigo;
      height:230px;
    }
  }
}
</style>
