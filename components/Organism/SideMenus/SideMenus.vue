<template>
  <div class="xidps-menu-wrap">
    <user-profile></user-profile>
    <tree-view class="xidps-menu"></tree-view>
  </div>
</template>

<script>
export default {
  name: "SideMenus"
}
</script>

<style scoped lang="scss">
  .xidps-menu-wrap{

  }
  .xidps-menu{
    padding:6px;
    overflow-y: scroll;
    height: calc(100vh - 300px);
  }
</style>
