<template>
  <div class="xidps-container">
    <search-text-box v-show="useSearch"  :search-columns="searchHeaders"  @click:search="handleSearch"></search-text-box>
    <v-btn v-show="useDelete" @click="$emit('click:remove')" class="xidps-btn xidps-btn-delete" outlined elevation="0">삭제</v-btn>
    <v-btn v-show="usePersonalizedUser" class="xidps-btn xidps-btn-personalize" outlined elevation="0"><v-icon>mdi-users</v-icon>개인 사용자 모아보기</v-btn>
    <v-btn v-show="useImportExcel" class="xidps-btn xidps-btn-add xidps-btn-import" elevation="0"><v-icon>mdi-plus</v-icon>엑셀 추가</v-btn>
    <v-btn v-show="useAdd" class="xidps-btn xidps-btn-add" elevation="0" @click="$emit('click:add')"><v-icon>mdi-plus</v-icon>추가</v-btn>
    <v-btn v-show="useSave" @click="$emit('click:save')" class="xidps-btn xidps-btn-save" elevation="1">저장하기</v-btn>
  </div>
</template>

<script>

const buttonTypeTemplate = (defaultValue=true) =>({
  type:Boolean,
  default:function(){
    return defaultValue;
  }
})

export default {
  name: "EditHandlerGroup",
  props: {
    useSearch: buttonTypeTemplate(),
    usePersonalizedUser: buttonTypeTemplate(false),
    useDelete: buttonTypeTemplate(),
    useAdd: buttonTypeTemplate(),
    useImportExcel: buttonTypeTemplate(false),
    useSave: buttonTypeTemplate(),

    searchHeaders:{
      type:Array,
      default:function(){
        return [];
      }
    }
  },

  methods:{
    handleSearch(payload){
      console.log(payload);
      this.$emit("click:search",payload);
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.xidps-container {
  display: flex;
  align-items:flex-start;

  * {
    margin-right: 10px;
  }
}

.v-text-field {
  height: 30px !important;
}

.xidps-search-bar {
  width: 210px;
  height: 30px !important;
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
