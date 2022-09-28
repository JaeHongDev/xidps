import VueRouter, { RouteConfig } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import SendMessagePage from '@/pages/SendMessagePage.vue';
import { useAuthenticationUserGuard, useOnlyUnAuthenticationUserGuard } from '@/router/auth';
import { ERouter } from '@/router/ERouter';
import CallerManagePage from '@/pages/CallerManagePage.vue';
import ManageUserPage from '@/pages/ManageUser/ManageUserPage.vue';
import ManageAddressPage from '@/pages/ManageAddress/ManageAddressPage.vue';
import ManageTemplatePage from '@/pages/ManageTemplate/ManageTemplatePage.vue';

const routes: Array<RouteConfig> = [
  {
    path: ERouter.HOME,
    name: 'home',
    beforeEnter: useAuthenticationUserGuard,
  },
  {
    path: ERouter.AUTH,
    name: 'auth',
    beforeEnter: useOnlyUnAuthenticationUserGuard,
    component: LoginPage,
  },
  {
    path: ERouter.SEND_MESSAGE,
    name: 'send-message',
    beforeEnter: useAuthenticationUserGuard,
    component: SendMessagePage,
  },
  {
    path: ERouter.MANAGE_CALLER,
    name: 'caller-manage',
    beforeEnter: useAuthenticationUserGuard,
    component: CallerManagePage,
  },
  {
    path: ERouter.MANAGE_USER,
    name: 'user-manage',
    beforeEnter: useAuthenticationUserGuard,
    component: ManageUserPage,
  },
  {
    path: ERouter.MANAGE_ADDRESS,
    name: 'manage-address',
    beforeEnter: useAuthenticationUserGuard,
    component: ManageAddressPage,
  },
  {
    path: ERouter.MANAGE_TEMPLATE,
    name: 'manage-template',
    beforeEnter: useAuthenticationUserGuard,
    component: ManageTemplatePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
