<template>
  <div class="xidps-file-container">
    <div class="xidps-file-result">
      <div class="xidps-file-list"></div>
      <div class="xidps-file-type">
        <span class="fs-7 fw-regular">0KB/0KB</span>
      </div>
    </div>
    <v-btn outlined class="xidps-file-btn" type="file"><v-icon>mdi-file</v-icon><span>파일 업로드</span></v-btn>
  </div>
</template>

<script>
export default {
  name: "FileUploader"
}
</script>

<style scoped lang="scss">
  .xidps-file-container{
    width:703px;
    display:flex;
    justify-content: space-between;

    .xidps-file-result{
      width:576px;
      border:1px solid #cbcbcb;
      background-color:$white;

      .xidps-file-list{
        height:45px;
      }
      .xidps-file-type{
        width:100%;
        height:15px;
        padding:0 6px;
        background-color:#eeeeee;
        font-size:$fs7;
        color:$warm-grey !important;

        span{
          float:right;
        }
      }
    }

    .xidps-file-btn{
      border:1px solid #cbcbcb !important;
      width:111px !important;
      height:58px !important;
      font-size:$fs7;
      font-weight: $semi-bold;
      color:$warm-grey !important;

    }
  }

</style>
