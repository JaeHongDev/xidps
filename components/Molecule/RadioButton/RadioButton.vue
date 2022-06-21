<template>
  <div class="radio-button-wrap">
    <v-btn v-for="(item,index) in lists " :key="index" :class="checkedStyle(index)" class="fw-bold"
           @click="select(item,index)"> {{ item }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  data(){
    return{
      selectedIndex: -1
    }
  },
  props:{
    lists: []
  },
  methods: {
    select(item,index) {
      if (index === this.selectedIndex) return; // 현재 선택한 버튼과 동일한 버튼의 경우
      this.selectedIndex = index;
      this.$emit("call:Api",item);
    },
    checkedStyle(index){
      return index === this.selectedIndex ? 'checked' : 'unchecked'
    },

  },
}
</script>

<style scoped lang="scss">
.radio-button-wrap{
  width:250px;
  display: flex;
  flex-wrap: wrap;
  .v-btn{
    max-width: 24px !important;
    max-height:24px !important;
    min-height:24px !important;
    min-width: 24px !important;
    margin:5px;
    padding:0px !important;
  }
  .unchecked{
    background-color:#e1e1e1 !important;
    color:#707070 !important;

  }
  .checked {
    background-color: indigo !important;
    color: white !important;
  }
}

</style>
