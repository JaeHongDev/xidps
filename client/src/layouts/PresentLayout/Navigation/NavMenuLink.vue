<template>
  <v-list-item v-bind="$attrs">
    {{$attrs}}
    <v-list-item-icon>
    </v-list-item-icon>
    <v-list-item-title>
      {{this.menu.title}}
    </v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

interface INavMenuLink {
  to: string;
  title: string;
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

<style scoped>

</style>
