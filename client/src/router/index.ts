import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: LoginPage,
  },
  {
    path: '/about',
    name: 'about',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
