<template>
  <div>
    <div v-for="(item,index) in items" :key="index">
      <span>{{ item.title }}</span>
      <div v-for="(child,childIndex) in item.items" :key="childIndex">
        {{ child.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuContainer",
  data() {
    return {
      items: [
        {title: "1", items: [{title: "child1", selected:false}]},
        {title: "2", selected: false},
        {title: "3", selected: false}
      ]
    }
  }
}
</script>

<style scoped>

</style>
