import VueRouter, { RouteConfig } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import SendMessagePage from '@/pages/SendMessagePage.vue';
import { useAuthenticationUserGuard, useOnlyUnAuthenticationUserGuard } from '@/router/auth';
import { ERouter } from '@/router/ERouter';
import CallerManagePage from '@/pages/CallerManagePage.vue';

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
    path: ERouter.CALLER_MANAGE,
    name: 'caller-manage',
    beforeEnter: useAuthenticationUserGuard,
    component: CallerManagePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
