<template>
  <v-app-bar
    class="xidps-header bg-light-navy-blue "
    fixed
    app
  >
    <div v-if="companyLogo">
      <img :src="companyLogo" height="60" alt="img"/>
    </div>
    <div v-else>
      <v-icon color="white">mdi-send</v-icon>
      <span>XID 메시징 서비스</span>

    </div>
    <v-spacer></v-spacer>
    <a class="text-decoration-none white--text xidps-qna" >Q&A</a>
    <a class="text-decoration-none white--text">1:1문의</a>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  props:{
    companyLogo:{
      type:String,
      default:function(){
        return null
      }
    }
  }
}
</script>

<style scoped lang="scss">
.xidps-header{
  .xidps-qna{
    margin-right:42px;
  }
}
::v-deep .v-toolbar__content{
  padding:0;
}
</style>
