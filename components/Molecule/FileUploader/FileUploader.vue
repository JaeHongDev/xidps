<template>
  <div class='d-flex justify-space-between'>
    <div class='xidps-file-result'>
      <div class='xidps-file-list'>
        <v-chip
          v-for='(file,index) in showFiles'
          :key='index'
          class='ma-2'
          close
          color='orange'
          label
          outlined
          @click:close='selectedFile.splice(file.index,1)'
        >
          {{file.name}}
        </v-chip>
      </div>
      <div class='xidps-file-type'>
        <span class='fs-7 fw-regular'>0KB/0KB</span>
      </div>
    </div>
    <div class='file-upload-buttons' v-if='useExcel'>
      <v-btn outlined class='xidps-file-btn' @click='findFile'>
        <v-icon class='grassh-green'>mdi-microsoft-excel</v-icon>
        <span>엑셀 업로드</span>
      </v-btn>
      <v-btn outlined class='xidps-file-btn' @click='$emit("button:download:excel")' type='file'>
        <v-icon class='grassh-green'>mdi-file</v-icon>
        <span>샘플 다운로드</span></v-btn>
    </div>
    <div class='file-upload-buttons' v-else>
      <v-btn outlined class='xidps-file-btn xidps-file' @click='findFile' type='file'>
        <v-icon class='grassh-green'>mdi-file</v-icon>
        <span>파일 업로드</span></v-btn>
    </div>
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
  props: {
    selectedFile: {
      type: Array,
      default: function () {
        return [];
      }
    },
    useExcel: {
      type: Boolean,
      default: function () {
        return false;
      }
    }
  },
  data() {
    return {
      isSelecting: false
    }
  },
  methods: {
    findFile() {
      this.isSelecting = true;
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, {once: true});
      this.$refs.uploader.click()

    },
    onFileChanged(e) {
      this.selectedFile.push(e.target.files[0])
      this.$emit("button:load:excel")
    },
  },

  computed: {
    showFiles() {
      return this.selectedFile.map((file, index) => ({
        name: file.name,
        index
      }))
    }
  }

}
</script>

<style scoped lang='scss'>

$grassh-green: #2c9700;
.grassh-green {
  color: $grassh-green !important;
}

.file-upload-buttons{
  display:flex;
  justify-content: center;
  flex-direction: column;
  .xidps-file-btn {
  }
}
.xidps-file-result {
  width: 80%;
  height:77px;
  border: 1px solid #cbcbcb;
  background-color: $white;

  .xidps-file-list {
    overflow: scroll;
    height: 60px;
  }
}

.xidps-file-type {
  float: bottom;
  height: 15px;
  padding: 0 6px;
  background-color: #eeeeee;
  font-size: $fs7;
  color: $warm-grey !important;

  span {
    float: right;
  }
}

.xidps-file-btn {
  border: 1px solid #cbcbcb !important;
  width: 111px !important;
  font-size: $fs7;
  font-weight: $semi-bold;
  color: $warm-grey !important;
}
.xidps-file{
  height:100% !important;

}

</style>
