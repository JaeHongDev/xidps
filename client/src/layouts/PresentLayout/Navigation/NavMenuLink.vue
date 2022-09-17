<template >
  <v-list-item link :to='menu.to'>
    <v-icon class='lavender fs-2'>{{menu.icon}}</v-icon>
    <v-list-item-title class='ml-3 white--text fw-semi-bold'>{{menu.title}}</v-list-item-title>
  </v-list-item>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue';

export interface INavMenuLink {
  to: string;
  icon?: string
  title: string;
  children?: Array<INavMenuLink>;
}

export default Vue.extend({
  name: 'NavMenuLink',
  props: {
    menu: {
      type: Object as PropType<INavMenuLink>,
      required: true,
    },
  },
});
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";

.v-list {
  .v-list-item {
    &:hover {
      background-color: $dark-indigo;
    }
  }

  .v-list-item--active {
    border-left: 6px solid $lavender !important;

  }

  .v-list-item__icon {
  }

  .v-list-item__title {
  }
}
</style>
