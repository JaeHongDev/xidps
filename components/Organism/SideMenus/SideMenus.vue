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
            title: "관리자", items: [
              {id: 1, icon: "mdi-home",name:"대시보드", to:"/admin/"},
              {id: 2, icon: "mdi-phone", name: "발신번호 관리" , to:"/admin/caller-manage"},
              {id: 3, icon: "mdi-account-plus", name: "사용자관리" , to:"/admin/user-manager"},
              {id: 4, icon: "mdi-folder-account", name: "공통주소록관리" , to:"/admin/common-addressbook"},
              {id: 5, icon: "mdi-view-dashboard", name: "발송량 관리" , to:"/admin"},
              {id: 6, icon: "mdi-cog", name  : "기능설정", to:"/admin"},
              {id: 7, icon:"mdi-sample",name:"테스트기능", to:"/admin"}
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
  width: 310px;
}

.xidps-menu {
  background-color: $dark-blue-grey;
  padding-right: 6px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 294px);
}
</style>
