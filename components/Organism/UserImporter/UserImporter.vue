<template>
  <div class="d-flex justify-space-around">
    <custom-modal width="645" :is-show="loadExcelShow" @button:click:close="loadExcelShow=false">
      <user-excel-loader></user-excel-loader>
    </custom-modal>
    <custom-modal width="400" :is-show="loadUserShow" @button:click:close="loadUserShow=false">
    </custom-modal>
    <v-btn class="importer__selector" @click="loadExcelShow=true">
      <div class="d-flex flex-column">
        <v-icon size="40" class="lavender">mdi-file-outline</v-icon>
        <span>엑셀파일 업로드</span>
      </div>
    </v-btn>
    <v-btn class="importer__selector" @click="loadUserShow">
      <div class="d-flex flex-column">
        <v-icon size="40" class="lavender">mdi-account</v-icon>
        <span>사용자로 불러오기</span>
      </div>
    </v-btn>

    <v-card>
      <v-row>
        <v-col md="2">
          <v-select outlined dense hide-details></v-select>
        </v-col>
        <v-col>
          <search-text-box :enable-search-options="false" ></search-text-box>
        </v-col>
      </v-row>

      <data-grid-view
        :use-pageable="false"
        :edit-groups="{
          useSave:true,
          useSearch:false,
          useDelete:false,
          useSave:false
        }"
        title="등록된 사용자"
      >

      </data-grid-view>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "UserImporter",
  data(){
    return{
      loadExcelShow:false,
      loadUserShow:false,
    }
  }
};
</script>

<style scoped lang="scss">
.importer__selector {
  width: 210px;
  height: 203px !important;
  border: 1px solid $light-navy-blue !important;
  background-color: $white;
}
</style>
