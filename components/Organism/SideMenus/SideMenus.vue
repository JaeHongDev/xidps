<template>
  <div class="xidps-menu-wrap">
    <user-profile></user-profile>
    <div class="xidps-menu scrollbar">
      <tree-view></tree-view>
      <tree-view></tree-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenus",
  props:{
    adminMenu:{
      type:Array,
      default:function(){
        return []
      }
    },
    managerMenu:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.scrollbar {
 overflow: auto;}

/* Overwrite the default to keep the scrollbar always visible */

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
  background-color: $dark-blue-grey;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0,0,0,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
  .xidps-menu-wrap{}
  .xidps-menu{
    width:310px;
    padding-right:6px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(100vh - 300px);
  }
</style>
