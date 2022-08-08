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

      id:0
    }
  },
  methods:{
    createDefaultTreeNode({name,bookmark=false}){
      return {
        id: this.id++,
        name:name ?? "(제목없음)",
        bookmark,
        children:[],
        editable: false,
        
      }
    }
  }
};
</script>

<style scoped>

</style>
