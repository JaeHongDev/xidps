import Vue from 'vue';
import './plugins/axios';
import { createPinia, PiniaVuePlugin } from 'pinia';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(PiniaVuePlugin);
Vue.use(VueRouter);

const pinia = createPinia();

Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
