<template>
  <div class="wrap">
    <div :class="color"></div>
    <span>{{color}}</span>
  </div>
</template>

<script>
export default {
  name: "Color",
  props:{
    color:""
  },
}
</script>

<style scoped lang="scss">
  .wrap{

    margin:20px;
  }
  div{
    width:200px;
    height:200px;
  }
</style>
