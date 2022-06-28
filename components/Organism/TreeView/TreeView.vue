<template>
  <v-treeview
    class="xidps-menu-wrap"
    v-model="tree"
    :items="items"
    activatable
    item-key="name"
    open-on-click
    expand-icon=""
  >
    <template v-slot:label="{item,open}" >
      <menu-item class="xidps-menu" :menu-name="item.name" :has-child="item.children" :icon="item.icon" ></menu-item>
    </template>
    <template v-slot:append="{ item, open }">
      <v-icon class="white--text" v-if="item.children">
        {{ open ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
export default {
  name: "TreeView",
  data: () => ({
    tree: [],
    items:[
      {icon:"mdi-home", name:"대시보드"},
      {icon:"mdi-phone", name:"발신번호 관리"},
      {icon:"mdi-account-plus", name:"사용자 관리"},
      {icon:"mdi-folder-account", name:"공통 주소록 관리"},
      {icon:"mdi-view-dashboard", name:"발송량 관리"},
      {icon:"mdi-cog", name:"기능 설정"},
    ]
  }),
}
</script>

<style scoped lang="scss">

.xidps-menu-wrap{
  width:310px;
  background-color:$dark-blue-grey;
  color:$white !important;
  padding-left:6px;
}
::v-deep .v-treeview-node--active{
  background-color: $dark-indigo !important;
  border-left: 6px solid $cornflower;
  margin-left: -6px;
  color:$white !important;
}
::v-deep .v-treeview-node__level {
  width:0 !important;
}
::v-deep .v-treeview-node__toggle{
  width:0 !important;
}
</style>
