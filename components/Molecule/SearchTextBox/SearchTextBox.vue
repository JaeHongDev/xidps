<template>
  <v-text-field
    outlined
    clearable
    dense
    type="text"
    hide-details
    v-model="searchText"
  >
    <template v-slot:prepend-inner>
      <v-select v-model="selectedKey"
                key="value"
                value="text"
                :items="searchColumns"
                height="20px"
                style="margin-top:2px"
                hide-details
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
      selectedKey: ""
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
    searchText: {
      type: String,
      default: function () {
        return "";
      }
    }
  },
  methods: {
    clickSearchBtn() {
      /*if(this.selectedKey === "") {
        alert("검색 조건이 선택되지 않았습니다.")
        return ;
      }*/
      this.$emit("search",{
        searchColumnName:"number",
        searchText:this.searchText
      })
    }
  },
  mounted() {
    console.log(this.searchColumns)
  }
}
</script>

<style scoped lang="scss">
.xidps-search-bar {
  font-size: $fs8 !important;
}

::v-deep .v-input__icon--clear {
  padding-bottom: 6px !important;
}
</style>
