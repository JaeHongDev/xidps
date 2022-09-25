<template>
  <div>
  <v-list >
    <span class='white--text ml-6 fs-6'>MANAGER</span>
    <template v-for = "(menu,index) in menus">
      <nav-menu-link :menu='menu' :key='index'></nav-menu-link>
    </template>
  </v-list>
  </div>

</template>

<script lang='ts'>
import NavMenuLink, { INavMenuLink } from '@/layouts/PresentLayout/Navigation/NavMenuLink.vue';
import { ERouter } from '@/router/ERouter';

export default {
  name: 'NavigationMenu',
  components: { NavMenuLink },
  setup: () => {
    const menus: Array<INavMenuLink> = [{
      to: '/admin/home',
      icon: 'mdi-home',
      title: '대시보드',
    },
    {
      to: '/admin/caller-manage',
      icon: 'mdi-phone',
      title: '발신번호 관리',
    },
    {
      to: ERouter.MANAGE_USER,
      icon: 'mdi-account-plus',
      title: '사용자관리',
    },
    {
      to: ERouter.MANAGE_ADDRESS,
      icon: 'mdi-folder-account',
      title: '주소록 관리',
    },
    {
      to: '/admin/send-message',
      icon: 'mdi-send',
      title: '메시지발송 ',
    },
    ];
    return { menus };
  },
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";

</style>
