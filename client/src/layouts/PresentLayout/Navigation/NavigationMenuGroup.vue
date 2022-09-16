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

<script>
export default {
  name: 'NavigationMenuGroup',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
