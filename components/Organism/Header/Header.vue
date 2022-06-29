<template>
  <v-app-bar
    class="xidps-header bg-light-navy-blue "
    fixed
    app
  >

    <div>
      <v-icon color="white">mdi-send</v-icon>
      <span>XID 메시징 서비스</span>
    </div>
    <v-spacer></v-spacer>
    <a class="text-decoration-none white--text">Q&A</a>
    <a class="text-decoration-none white--text">1:1문의</a>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">

</style>
