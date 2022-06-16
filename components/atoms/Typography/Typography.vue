<template>
  <span :class="typographyClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  title: "atoms/buttons",
  props: {
    size: ""
  },
  computed: {
    typographyClass() {
      if (this.size === "h6")
        return 'fs-6';
      if (this.size === 'h5')
        return 'fs-5';
      if (this.size === 'h4')
        return 'fs-4';
      if (this.size === 'h3')
        return 'fs-3';
      if (this.size === 'h2')
        return 'fs-2';
      if (this.size === 'h1')
        return 'fs-1';
      return 'fs-3' //default
    }

  }
}
</script>

<style scoped>

</style>
