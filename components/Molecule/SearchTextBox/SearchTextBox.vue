<template>
  <v-text-field
    outlined
    clearable
    @click:clear="clearText"
    dense
    type="text"
    hide-details
    v-model="searchText"
    class='search-text-btn'
  >
    <template v-slot:prepend-inner>
      <v-select v-model="selectedKey"
                key="value"
                value="text"
                :items="searchColumns"
                height="20px"
                style="margin-top:2px"
                hide-details
                class='column-selector'
                dense>
      </v-select>
    </template>
    <template v-slot:append>
      <v-btn @click="clickSearchBtn" icon width="16" height="16">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "SearchTextBox",
  data() {
    return {
      selectedKey: "",
      searchText:"",
    }
  },
  props: {
    searchColumns: {
      type: Array,
      default: function () {
        return [
          {text: "", value: ""}
        ]
      }
    },
  },
  methods: {
    clearText(){
      this.searchText = "";
    },
    clickSearchBtn() {
      if(this.selectedKey === "") {
        alert("검색 조건이 선택되지 않았습니다.")
        return ;
      }
      console.log(this.searchText);
      this.$emit("click:search",{
        searchColumnName:this.selectedKey,
        searchText:this.searchText
      })
    },

  },
  mounted() {
    console.log(this.searchColumns)
  }
}
</script>

<style scoped lang="scss">
::v-deep .v-input__icon--clear {
  padding-bottom: 6px !important;
}
</style>


