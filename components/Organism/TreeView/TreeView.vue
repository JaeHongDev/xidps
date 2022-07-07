<template>
  <div class="xidps-treeview-wrap">
    <div class="xidps-menu-title">
      {{ title }}
    </div>
    <v-treeview
      v-model="tree"
      :items="items"
      activatable
      item-key="id"
      open-on-click
      expand-icon=""

      @update:active="handleNodeClick"
      @click="handleNodeClick"
    >
      <template v-slot:label="{item,open}">
        <menu-item class="xidps-menu" :menu-name="item.name" :has-child="item.children !== undefined"
                   :icon="item.icon" :to="item.to"></menu-item>
      </template>
      <template v-slot:append="{ item, open }">
        <v-icon class="white--text" v-if="item.children">
          {{ open ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
        </v-icon>
      </template>
    </v-treeview>
  </div>

</template>

<script>
export default {
  name: "TreeView",
  props: {
    title: {
      type: String,
      default: function () {
        return ""
      }
    },
    items: {
      type: Array,
      default: function () {
        return [{
          id: 1, icon: "mdi-home", name: "대시보드", children: [
            {id: 7, icon: "mdi-home", name: "대시보드Children"},
            {id: 8, icon: "mdi-phone", name: "발신번호 관리Children"},
            {id: 9, icon: "mdi-account-plus", name: "사용자 관리Children"},
            {id: 10, icon: "mdi-folder-account", name: "공통 주소록 관리Children"},
            {id: 11, icon: "mdi-view-dashboard", name: "발송량 관리Children"},
            {id: 12, icon: "mdi-cog", name: "기능 설정Children"},
            {id: 13, icon: "mdi-home", name: "대시보드Children"},
            {id: 14, icon: "mdi-phone", name: "발신번호 관리Children"},
            {id: 15, icon: "mdi-account-plus", name: "사용자 관리Children"},
            {id: 16, icon: "mdi-folder-account", name: "공통 주소록 관리Children"},
            {id: 17, icon: "mdi-view-dashboard", name: "발송량 관리Children"},
            {id: 18, icon: "mdi-cog", name: "기능 설정Children"},
            {id: 19, icon: "mdi-home", name: "대시보드Children"},
            {id: 20, icon: "mdi-phone", name: "발신번호 관리Children"},
            {id: 21, icon: "mdi-account-plus", name: "사용자 관리Children"},
            {id: 22, icon: "mdi-folder-account", name: "공통 주소록 관리Children"},
            {id: 23, icon: "mdi-view-dashboard", name: "발송량 관리Children"},
            {id: 24, icon: "mdi-cog", name: "기능 설정Children"},
          ]
        },
          {id: 2, icon: "mdi-phone", name: "발신번호 관리"},
          {id: 3, icon: "mdi-account-plus", name: "사용자 관리"},
          {id: 4, icon: "mdi-folder-account", name: "공통 주소록 관리"},
          {id: 5, icon: "mdi-view-dashboard", name: "발송량 관리"},
          {id: 6, icon: "mdi-cog", name: "기능 설정"}];
      }
    }
  },
  data: () => ({
    tree: [],
  }),
  methods: {
    handleNodeClick() {
    }
  }
}
</script>

<style scoped lang="scss">

.xidps-treeview-wrap {
  width: 310px;
  background-color: $dark-blue-grey;
  color: $white !important;
  padding-left: 6px;

  .xidps-menu-title {
    height: 35px;
    font-weight: $light;
    padding: 10px 30px;
    font-size: $fs6;
  }
}

::v-deep .v-treeview-node--active {
  background-color: $dark-indigo !important;
  border-left: 6px solid $cornflower;
  margin-left: -6px;
  color: $white !important;
}

::v-deep .v-treeview-node__level {
  width: 0 !important;
}

::v-deep .v-treeview-node__toggle {
  width: 0 !important;
}
</style>
