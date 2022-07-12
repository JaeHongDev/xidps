<template>
  <div class='xidps-file-container'>
    <div class='xidps-file-result'>
      <div class='xidps-file-list'>
        <v-chip>hi</v-chip>
      </div>
      <div class='xidps-file-type'>
        <span class='fs-7 fw-regular'>0KB/0KB</span>
      </div>
    </div>
    <v-btn outlined class='xidps-file-btn' @click='findFile' type='file'>
      <v-icon>mdi-file</v-icon>
      <span>파일 업로드</span></v-btn>
    <input
      ref='uploader'
      class='d-none'
      type='file'
      @change='onFileChanged'
    />
  </div>
</template>

<script>
export default {
  name: "FileUploader",
  data(){
    return{
      selectedFile: null,
      isSelecting: false
    }
  },
  methods: {
    findFile() {
      this.isSelecting = true;

      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, { once: true });
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]

      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        console.log(e);
        console.log(e.target
        );
        let data = e.target.result;
        console.log(data);
      };
      // do something
      fileReader.readAsArrayBuffer(this.selectedFile);
    }
  }
}
</script>

<style scoped lang='scss'>
.xidps-file-container {
  width: 703px;
  display: flex;
  justify-content: space-between;

  .xidps-file-result {
    width: 576px;
    border: 1px solid #cbcbcb;
    background-color: $white;

    .xidps-file-list {
      height: 45px;
    }

    .xidps-file-type {
      width: 100%;
      height: 15px;
      padding: 0 6px;
      background-color: #eeeeee;
      font-size: $fs7;
      color: $warm-grey !important;

      span {
        float: right;
      }
    }
  }

  .xidps-file-btn {
    border: 1px solid #cbcbcb !important;
    width: 111px !important;
    height: 58px !important;
    font-size: $fs7;
    font-weight: $semi-bold;
    color: $warm-grey !important;

  }
}

</style>
