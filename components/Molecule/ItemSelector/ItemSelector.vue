<template>
  <v-select
    :items="items"
    item-text="value"
    v-model="items[index]"
    dense
    solo
    single-line
    menu-props="auto"
    hide-details
    return-object
  ></v-select>
</template>

<script>
export default {
  name: "ItemSelector",
  props:{
    items:{
      type:Array,
      default:function(){
        return [{id:1,value:"게시글이 없습니다."}]
      }
    }
  },
  mounted(){
    setInterval(()=>{
      if(this.index === 0){
        this.counter = 1;
      }
      if(this.index === this.items.length-1){
        this.counter = -1;
      }
      this.index = this.index + this.counter
    },10000)
  }
}
</script>

<style scoped>

</style>
