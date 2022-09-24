<template>
  <v-list-group
    ref="refVListGroup"
    class="text--primary"
    >
    <template #prependIcon>
      <v-icon>{{icon}}</v-icon>
    </template>
    <template #activator>
      <v-list-item-title>
        {{title}}
      </v-list-item-title>
    </template>
  </v-list-group>
</template>

<script lang='ts'>
import { PropType } from 'vue';
import { INavMenuLink } from '@/layouts/PresentLayout/Navigation/NavMenuLink.vue';

export default {
  name: 'NavigationMenuGroup',
  props: {
    menu: {
      type: Object as PropType<INavMenuLink>,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
