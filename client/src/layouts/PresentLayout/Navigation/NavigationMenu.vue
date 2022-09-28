<template>
  <div>
    <v-list v-show="isAdmin">
      <span class='white--text ml-6 fs-6'>ADMIN</span>
      <template v-for="(menu,index) in adminMenus">
        <nav-menu-link :menu='menu' :key='index'></nav-menu-link>
      </template>
    </v-list>
    <v-list>
      <span class='white--text ml-6 fs-6'>NORMAL</span>
      <template v-for="(menu,index) in managerMenus">
        <nav-menu-link :menu='menu' :key='index'></nav-menu-link>
      </template>
    </v-list>
  </div>
</template>

<script lang='ts' setup>
import NavMenuLink, { INavMenuLink } from '@/layouts/PresentLayout/Navigation/NavMenuLink.vue';
import { ERouter } from '@/router/ERouter';
import { useAuthStore } from '@/store/auth';
import { EAuthority } from '@/store/auth/IUser';

const authStore = useAuthStore();
const menus: Array<INavMenuLink> = [

];
const adminMenus: INavMenuLink[] = [
  {
    to: '/admin/home',
    icon: 'mdi-home',
    title: '대시보드',
  },
  {
    to: ERouter.MANAGE_CALLER,
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
    to: ERouter.MANAGE_SHIPMENT,
    icon: 'mdi-view-dashboard',
    title: '발송량 관리',
  },
  {
    to: ERouter.MANAGE_UTILITY,
    icon: 'mdi-cog',
    title: '기능설정',
  },
];
const managerMenus: INavMenuLink[] = [
  {
    to: ERouter.SEND_MESSAGE,
    icon: 'mdi-message',
    title: '메시지발송 ',
  },
  {
    to: ERouter.MANAGE_PERSONAL_ADDRESS,
    icon: 'mdi-folder-account',
    title: '주소록 관리',
  },
  {
    to: ERouter.MANAGE_TEMPLATE,
    icon: 'mdi-file',
    title: '템플릿 관리',
  },
  {
    to: ERouter.SEND_RESULT,
    icon: 'mdi-result',
    title: '전송 결과',
  },
];

const isAdmin = () => authStore.user?.authority === EAuthority.MANAGE;
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";

</style>
