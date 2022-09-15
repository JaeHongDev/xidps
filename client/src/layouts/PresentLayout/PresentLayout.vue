<template>
  <v-app>
    <v-app-bar app class="none" >
    </v-app-bar>
    <v-navigation-drawer app class="light-navy-blue" width="310">
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
    <v-list>
      <v-list-item link to="/admin/send-message">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class='white--text'>메시지 발송</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    <v-main class='mt-10 ml-10'>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue, { reactive, ref } from 'vue';

export default Vue.extend({
  name: 'PresentLayout',
  setup: () => {
    const item = ref([{ id: 2, icon: 'mdi-phone', name: '발신번호 관리' },
      { id: 3, icon: 'mdi-account-plus', name: '사용자 관리' },
      { id: 4, icon: 'mdi-folder-account', name: '공통 주소록 관리' },
      { id: 5, icon: 'mdi-view-dashboard', name: '발송량 관리' },
      { id: 6, icon: 'mdi-cog', name: '기능 설정' }]);
    const tree = ref([]);
    return { item, tree };
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
