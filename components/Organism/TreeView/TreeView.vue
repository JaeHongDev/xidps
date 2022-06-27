<template>
  <v-treeview :items="items" expand-icon=""  open-on-click class="xidps-menu">
    <template v-slot:label="{item,open}"  >
      <menu-item :menu-name="item.name" :icon="item.icon"></menu-item>
    </template>
  </v-treeview>
</template>

<script>
export default {
  name: "TreeView",
    data: () => ({
      items: [
        {
          id: 1,
          name: '대시보드',
          icon:"mdi-home",
          children: [
            {id: 2, name: 'Calendar : app'},
            {id: 3, name: 'Chrome : app'},
            {id: 4, name: 'Webstorm : app'},
          ],
        },
      ],
    }),
}
</script>

<style scoped lang="scss">

.xidps-menu{
  width:310px;
  height:90vh;
  background-color:$dark-blue-grey;
  .v-treeview-node__children{
    padding:0 !important;
    width:100% !important;
  }
  ::v-deep .v-treeview-node__toggle{
    width:0px !important;
  }
  ::v-deep .v-treeview{
    padding:0px !important;
  }
  ::v-deep .v-treeview-node__root{
    padding:0px !important;
  }
  ::v-deep .v-treeview-node__level{
    width:0px !important;
  }
}
</style>
