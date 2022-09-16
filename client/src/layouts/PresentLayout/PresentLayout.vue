<template>
  <v-app>
    <v-app-bar app class="none" >
    </v-app-bar>
    <v-navigation-drawer app class="light-navy-blue" :disable-resize-watcher="true" width="310">
      <!-- Navigation Header -->
      <div class="navigation-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
        <div>
          <v-icon color="white">mdi-send</v-icon>
          <span>XID 메시징 서비스</span>
          <router-link to="/auth">1234</router-link>
        </div>
      </div>
      <div class="navigation--user-profile">

      </div>
    <v-list v-for="(listItem,index) in listItems" :key="index">
      <v-list-item link :to="listItem.to">
        <v-list-item-icon class="me-4">
          <v-icon size="22">
            {{listItem.icon}}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class='white--text'>
            {{listItem.name}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
      <v-list>
        <navigation-menu-group title="테스트11" icon="mdi-send">
        <v-list-item link to="/">
        <v-list-item-icon class="me-4">
          <v-icon size="22">
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class='white--text'>
            1234
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </navigation-menu-group>
      </v-list>
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

export default Vue.extend({
  name: 'PresentLayout',
  components: { NavigationMenuGroup },
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
