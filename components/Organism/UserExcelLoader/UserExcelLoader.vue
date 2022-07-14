<template>
  <div>
    <excel-data-viewer :headers='headers' :rows='rows'></excel-data-viewer>
    <file-uploader
      :selected-file='selectedFile'
      @button:load:excel='loadExcelData'
      use-excel
      class='pt-5'></file-uploader>
    <div>
      <span class='light-gray fs-6'>
        * 파일은 .csv .xlsx .xls 파일만 지원합니다.
        업로드시 오류가 발생하는 경우 엑셀 샘플을 다운해  업로드 해주시길 바랍니다.
      </span>
      <v-btn @click='saveExcelData'>저장하기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserExcelLoader",
  data() {
    return {
      selectedFile: [],
      isSelecting: false,
      headers: [
        {value: "id", text: "아이디", align: "center", width: "100px"},
        {value: "name", text: "아이디", align: "center", width: "100px"},
        {value: "number", text: "전화번호", align: "center", width: "100px"},
        {value: "position", text: "아이디", align: "center", width: "100px"},
      ],
      rows: []
    }
  },
  methods: {
    async onFileChanged(e) {
      if (e.target.files.length > 1) {
        alert("하나의 파일만 등록 가능합니다.");
        return;
      }
      this.selectedFile = e.target.files[0]
    },
    async loadExcelData() {
      const arrayBuffer = await this.selectedFile[0].arrayBuffer();
      if (!arrayBuffer) return;

      const result = this.$excel.readUserExcel(arrayBuffer).map(user => ({
        id: user[0] ?? "",
        name: user[1] ?? "",
        number: user[2] ?? "",
        position: user[3] ?? "",
      }));
      console.log(result);
      this.rows = result;
    },
    createExcelFile() {
      this.$excel.downloadUserExcel();
    },
    saveExcelData() {
      this.$emit("button:click:save", {
          rows: this.rows
        }
      )
    }
  }

}
</script>

<style scoped>

</style>
