<template>
  <v-container>
  <v-text-field
    v-model="message"
    outlined
    clearable
    dense
    type="text"
    hide-details
    height="30px"
    class="xidps-search-text"
  >
    <template v-slot:append>
      <v-btn icon  width="24" height="24">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "SearchTextBox",
}
</script>

<style scoped lang="scss">
.v-input__control{
  min-height: 30px !important;
}
.xidps-search-bar{
  font-size: $fs8 !important;
}
</style>
