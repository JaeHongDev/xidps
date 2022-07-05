<template>
  <v-card class="pa-3">
    <v-row>
      <v-col>
        <data-table-header></data-table-header>
      </v-col>
      <v-col>
        <edit-handler-group></edit-handler-group>
      </v-col>
    </v-row>
    <v-data-table :headers="headers" :items="items" dense>
      <template v-slot:item ="{item,headers}" >
        <tr>
          <td v-for="(columnValue,columnKey, index) in item">
            <template v-if="headers[index].editable">
              <v-text-field></v-text-field>
            </template>
          </td>
          </tr>
      </template>
      <template v-slot:item.status="item">
        <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "DataGridView",
  data(){
    return {
      headers:[
        {editable:true, text:"name",value:"name", width:"200px"},
        {editable:false, text:"관리",value:"status", width:"200px"},
        { text:"division",value:"division",align:' d-none '}
      ],
      items:[
        {name:"1234",status:"INSERT"},
        {name:"1234",status:"INSERT"}
      ]
    }
  }
}

const headers = [
  {text:"id"},
  {text:"name"},
  {text:"number"},
  {text:"division"},
]
const headerVariables = [
  {text:"var1"},
  {text:"var2"},
]




</script>

<style scoped>

</style>
