<template>
  <div class="xidps-container">
      <v-text-field
        label="Solo"
        solo
        class="xidps-search-bar"
        hide-details
        dense
      ></v-text-field>

    <slot></slot>
    <v-btn class="xidps-btn xidps-btn-delete" outlined elevation="0">삭제</v-btn>
    <v-btn class="xidps-btn xidps-btn-add xidps-btn-import" elevation="1">
      <v-icon>mdi-plus</v-icon>
      엑셀 추가
    </v-btn>
    <v-btn class="xidps-btn xidps-btn-add" elevation="1">
      <v-icon>mdi-plus</v-icon>
      추가
    </v-btn>
    <v-btn class="xidps-btn xidps-btn-save" elevation="1">저장하기</v-btn>
  </div>

</template>

<script>
export default {
  name: "EditHandlerGroup"
}
</script>

<style scoped lang="scss">
.xidps-container{
  display:flex;
  justify-content: space-around;
  width:790px;
  align-items: center;

  *{
    margin-right:10px;
  }
}

.v-text-field{
  height:30px !important;
}
.xidps-search-bar {
  width: 210px;
  height:30px !important;
}

.xidps-btn-delete {
  color: $salmon !important;
  border: 1px solid $salmon;
}

.xidps-btn-import {
  width: 143px;
}

.xidps-btn-add {
  color: $light-navy-blue;
  border: 1px solid $light-navy-blue;
}

.xidps-btn-save {
  background-color: $dark-blue-grey !important;
  color: $white !important;
}
</style>
