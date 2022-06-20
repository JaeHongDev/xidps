import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import { themes } from '~/config/themes';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default (ctx) => {
  const vuetify = new Vuetify({
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    options: {
      customProperties: true,
    },
    theme: {
      themes: {
        light: {
          ...themes.light,
        },
      },
    },
  });
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
