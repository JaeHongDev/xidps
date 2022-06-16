<template>
  <v-btn class="login_btn" :color="color" elevation="2">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "XidpsButton",
  props:{
    color:undefined
  }
}
</script>

<style scoped lang="scss">
</style>
