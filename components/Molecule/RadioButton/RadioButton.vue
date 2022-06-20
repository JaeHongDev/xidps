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
      default:-1
    }
  },
  methods: {
    select(index) {
      if (index === this.selectedIndex) return; // 현재 선택한 버튼과 동일한 버튼의 경우
      this.selectedIndex = index;
      this.$emit("callApi",index);
    },
    checkedStyle(index){
      return index === this.selectedIndex ? 'checked' : 'unchecked'

    }
  },
  created() {
    console.log("create");
  }
}
</script>

<style scoped lang="scss">
.radio-button-wrap{
  width:420px;
  display: flex;
  flex-wrap: wrap;
  .v-btn{
    min-width:24px !important;
    min-height:24px !important;
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
