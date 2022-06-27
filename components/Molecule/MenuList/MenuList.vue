<template>
  <v-list class="xidps-menu-wrap">
    <v-list-group
      v-for="item in items"
      :key="item.title"
      no-action
    >

      <template v-if="item.items === undefined" v-slot:appendIcon>
        <v-icon></v-icon>
      </template>
      <template v-else v-slot:appendIcon>
        <v-icon class="white">mdi-chevron-up</v-icon>
      </template>

      <template v-slot:activator>
        <menu-item :selected="false" :icon="item.action" :menu-name="item.title">
        </menu-item>
      </template>

      <menu-item
        v-for="child in item.items"
        :key="child.title"
        :selected="false"
        :icon="child.action"
        :menu-name="child.title"
      >
      </menu-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: "MenuList",
  data: () => ({
    items: [
      {
        action: 'mdi-home',
        title: '대시보드',
      },
      {
        action: 'mdi-phone',
        title: '발신번호 관리',
        items:[
          {
            action:'mdi-phone',
            title:'발신번호 관리'
          }
        ]
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
.xidps-menu-wrap{
  width:310px;
  height:95vh;
  background-color: $dark-blue-grey !important;
  color:$white !important;

  .v-list-item{
    padding:0px !important;
  }
  .v-list-item__content{
    color:$white !important;
  }
}
</style>
