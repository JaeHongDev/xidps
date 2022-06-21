<template>
  <span :class="[size,weight]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  title: "atoms/buttons",
  props: {
    size: "",
    weight:""
  }
}
</script>

<style scoped>
</style>
