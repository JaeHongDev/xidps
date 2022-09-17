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
