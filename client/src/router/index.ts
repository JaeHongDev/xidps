import VueRouter, { RouteConfig } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import SendMessagePage from '@/pages/SendMessagePage.vue';
import { useAuthenticationUserGuard, useOnlyUnAuthenticationUserGuard } from '@/router/auth';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    beforeEnter: useAuthenticationUserGuard,
  },
  {
    path: '/auth',
    name: 'auth',
    beforeEnter: useOnlyUnAuthenticationUserGuard,
    component: LoginPage,
  },
  {
    path: '/admin/send-message',
    name: 'send-message',
    beforeEnter: useAuthenticationUserGuard,
    component: SendMessagePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
