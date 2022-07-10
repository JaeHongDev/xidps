<template>
  <v-card  class='xidps-navigation-wrap white--text'>
    <v-navigation-drawer permanent >
      <user-profile></user-profile>
      <v-divider></v-divider>


    </v-navigation-drawer>
  </v-card>

</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped lang='scss'>
  .xidps-navigation-wrap{
    background-color:$dark-indigo !important;
    width:310px;
    .v-navigation-drawer{
      background-color:$dark-indigo !important;
    }
  }
</style>

