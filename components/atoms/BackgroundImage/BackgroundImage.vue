<template>
  <div :style="getImage" class="bg-image">

  </div>
</template>

<script>
export default {
  name: "BackgroundImage",
  computed:{
    getImage(){
      return "background-image:'~/static/v.png'"
    }
  }
}
</script>

<style scoped>
.bg-image{
  width:400px;
  height:400px;
}
</style>
