<template>
  <div class="radio-button-wrap">
    <v-btn v-for="(item,index) in lists " :key="index" :class="checkedStyle(index)"
           @click="select(index)"> {{ item.text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props:{
    lists: {
      type:{
        text:String
      },
      required:true,
    },
    selectedIndex:{
      type:Number,
      required: false,
    }
  },
  methods: {
    select(index) {
      if (index === this.selectedIndex) return; // 현재 선택한 버튼과 동일한 버튼의 경우
      this.$emit("call:Api",index);
    },
    checkedStyle(index){
      return index === this.selectedIndex ? 'checked' : 'unchecked'
    },

  },
}
</script>

<style scoped lang="scss">
.radio-button-wrap{
  width:300px;
  display: flex;
  flex-wrap: wrap;
  .v-btn{
    max-width:24px !important;
    max-height:24px !important;
    min-height:24px !important;
    min-width: 24px !important;
    margin:5px;
  }
}
.unchecked{
  background-color:#e1e1e1 !important;
  color:#707070 !important;
}
.checked {
  background-color: indigo !important;
  color: white !important;
}
</style>
