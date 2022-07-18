<template>
  <div v-if='uploading'>
    <span>기존데이터</span>
    <excel-data-viewer
      :headers='headers'
      :rows='uploadedRow'
      :width='900'>

    </excel-data-viewer>
    <span>중복데이터</span>
    <excel-data-viewer
      :headers='headers'
      :rows='uploadedRow'
      :width='900'>
    </excel-data-viewer>
    <div>
      <v-btn>취소</v-btn>
      <v-btn @click='saveExcelData'> 저장</v-btn>
    </div>
  </div>
  <div v-else>
    <excel-data-viewer
      :headers='headers'
      :rows='rows'
      :width='900'
    ></excel-data-viewer>
    <file-uploader
      :selected-file='selectedFile'
      @button:load:excel='loadExcelData'
      @button:download:excel='downloadSampleData'
      use-excel
      class='pt-5'></file-uploader>
    <div class='d-flex justify-space-between pt-3'>
      <p class='light-gray fs-6'>
        * 파일은 .csv .xlsx .xls 파일만 지원합니다.<br>
        업로드시 오류가 발생하는 경우 엑셀 샘플을 다운해 업로드 해주시길 바랍니다.
      </p>
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
      uploading: false,
      uploadedRow: [],
      headers: [
        {value: "index", text: "", align: "center", width: "50px"},
        {value: "id", text: "아이디", align: "center", width: "100px"},
        {value: "name", text: "이름", align: "center", width: "100px"},
        {value: "number", text: "휴대폰번호", align: "center", width: "100px"},
        {value: "position", text: "구분값", align: "center", width: "100px"},
        {value: "var1", text: "변수1", align: "center", width: "100px"},
        {value: "var2", text: "변수2", align: "center", width: "100px"},
        {value: "var3", text: "변수3", align: "center", width: "100px"},
        {value: "var4", text: "변수4", align: "center", width: "100px"},
      ],
      rows: [
        {
          index: 0,
          id: "0",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 1,
          id: "1",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 2,
          id: "2",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 3,
          id: "3",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 4,
          id: "4",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 5,
          id: "5",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 6,
          id: "6",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 7,
          id: "7",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 8,
          id: "8",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 9,
          id: "9",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 10,
          id: "10",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 11,
          id: "11",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
        {
          index: 12,
          id: "12",
          name: "test1",
          number: "010-0000-0000",
          position: "position",
          var1: "",
          var2: "",
          var3: "",
          var4: ""
        },
      ]
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

      this.uploadedRow = this.$excel.readUserExcel(arrayBuffer).map((user, index) => ({
        index: index + 1,
        id: user[0] ?? "",
        name: user[1] ?? "",
        number: user[2] ?? "",
        position: user[3] ?? "",
      }));
      this.uploading = true;
    },
    createExcelFile() {
      this.$excel.downloadUserExcel();
    },
    saveExcelData() {
      this.$emit("button:click:save", {
          rows: this.rows
        }
      )
    },

    downloadSampleData() {
      this.$excel.downloadUserExcel(
        this.rows.map(row => {
          const copyRow = Object.assign(row, {});
          delete copyRow.index;
          return copyRow;
        })
      );
    }
  }

}
</script>

<style scoped>

</style>
