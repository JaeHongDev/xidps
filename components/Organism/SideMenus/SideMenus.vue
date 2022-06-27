<template>
  <v-card>
    <user-profile></user-profile>
    <tree-view class="xidps-menu"></tree-view>
  </v-card>
</template>

<script>
export default {
  name: "SideMenus"
}
</script>

<style scoped lang="scss">
  .xidps-menu{
    height:60vh;
    overflow-y: scroll;
    padding:6px;
  }
</style>
