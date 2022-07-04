<template>
  <v-text-field
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
</template>

<script>
export default {
  name: "SearchTextBox",
}
</script>

<style scoped lang="scss">
.xidps-search-bar{
  font-size: $fs8 !important;
}
</style>
