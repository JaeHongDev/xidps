<template>
  <div class="xidps-menu-wrap">
    <user-profile></user-profile>
    <div class="xidps-menu scrollbar">
      <tree-view
        v-for="(menu,index) in menuCollection"
        :key =index
        v-bind="menu"
      ></tree-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenus",
  props: {
    menuCollection: {
      type: Array,
      default: function () {
        return [
          {
            title: "Empty", items: [
          {id: 2, icon: "mdi-phone", name: "sample1" },
          {id: 3, icon: "mdi-account-plus", name: "sample2" },
          {id: 4, icon: "mdi-folder-account", name: "sample3" },
              {id: 5, icon: "mdi-view-dashboard", name: "sample4" },
              {id: 6, icon: "mdi-cog", name  : "sample5 "}
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.scrollbar {
  overflow: auto;
}

/* Overwrite the default to keep the scrollbar always visible */

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
  background-color: $dark-blue-grey;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}

.xidps-menu-wrap {
  background-color: $dark-blue-grey;
  width: 310px;
}

.xidps-menu {
  padding-right: 6px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 300px);
}
</style>
