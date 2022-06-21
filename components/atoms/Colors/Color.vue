<template>
  <div class="wrap">
    <div :class="setColor"></div>
    <span>{{color}}</span>
  </div>
</template>

<script>
export default {
  name: "Color",
  props:{
    color:""
  },
  computed:{
    setColor(){
      console.log(this.$props.color)
      return `bg-${this.$props.color}`
    }
  }
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
