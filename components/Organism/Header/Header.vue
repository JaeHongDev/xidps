<template>
  <v-app-bar
    class="xidps-header bg-light-navy-blue"
    fixed
    app
  >
    <v-app-bar-nav-icon/>
    <v-btn
      icon
    >
    </v-btn>
    <v-btn
      icon
    >
      <v-icon>mdi-application</v-icon>
    </v-btn>
    <v-btn
      icon
    >
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-spacer />
    <v-btn
      icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
