<template>
  <v-row dense>
    <v-col cols="3">
      <address-book></address-book>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="8">
      <data-grid-view ></data-grid-view>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "common-addressbook",

  data(){
    return{
      addressBook:[],
      headers:[],
      rows:[],
    }
  }
};
</script>

<style scoped>

</style>
