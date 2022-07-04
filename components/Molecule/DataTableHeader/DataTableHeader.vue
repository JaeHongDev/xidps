<template>
    <div>
      <span class="data-table-header-title fw-semi-bold light-navy-blue fs-3 ">{{title}}</span>
      <div class="data-table-header-count">
        <span class=" fs-5 warm-grey fw-regular">TOTAL : {{count}}건</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "DataTableHeader",
  props:{
    title: {
      type: String,
      default: function () {
        return "등록되지 않는 명칭"
      }
    },
    count:{
      type:Number,
      default:function(){
        return 0
      }
    }
  },
}
</script>

<style scoped lang="scss">
  .data-table-header-title{
    padding-left:3px;
  }
  .data-table-header-count{
    margin-top:13px;
  }
</style>
