<template>
  <v-row dense>
    <v-col cols="3">
      <address-book
        :address-items="addressItems"
        @create:new-treenode="handleNewTreeNode"
        @click:tree-node="handleSelectRow"
      ></address-book>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="8">
      <data-grid-view
        :headers="headers"
        :rows="rows"
      >
        <template v-slot:state-edit='{item,index}'>
          <td>{{item.v_index}}</td>
          <td>
            <v-text-field hide-details dense outlined v-model='editUser.name'></v-text-field>
          </td>
          <td>
            <v-text-field hide-details dense outlined v-model='editUser.number'></v-text-field>
          </td>
          <td>
            <v-text-field hide-details dense outlined v-model='editUser.position'></v-text-field>
          </td>
          <td>
            <v-text-field hide-details dense outlined v-model='editUser.var1'></v-text-field>
          </td>
          <td>
            <v-text-field hide-details dense outlined v-model='editUser.var2'></v-text-field>
          </td>
          <td>
            <v-text-field hide-details dense outlined v-model='editUser.var3'></v-text-field>
          </td>
          <td>
            <v-text-field hide-details dense outlined v-model='editUser.var4'></v-text-field>
          </td>
          <td>
            <v-btn @click='handleEditEnd(item)' icon>
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn @click='handleEditCancel(item)' icon>
              <v-icon>mdi-cancel</v-icon>
            </v-btn>
          </td>
        </template>


        <template v-slot:state-basic='{item,index}'>
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.number}}</td>
          <td>{{item.position}}</td>
          <td>{{item.var1}}</td>
          <td>{{item.var2}}</td>
          <td>{{item.var3}}</td>
          <td>{{item.var4}}</td>
          <td>
            <v-btn @click='handleEditStart(item)' icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </template>
      </data-grid-view>


    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "common-addressbook",

  data() {
    return {
      addressItems: [],
      rows: [],
      headers: [{
        "value": "id",
        "text": "ID",
        "align": "center",
        "width": "100px",
      }, {
        "value": "name",
        "text": "이름",
        "align": "center",
        "width": "200px",
      }, {
        "value": "number",
        "text": "연락처",
        "align": "center",
        "width": "150px",
      },{
        "value":"position",
        "text":"구분",
        "align":"center",
        "width": "120px",
      },{
        "value":"var1",
        "text": "(변수#1)",
        "align":"center",
        "width": "120px",
      },{
        "value":"var1",
        "text": "(변수#2)",
        "align":"center",
        "width": "120px",
      }, {
        "value": "var1",
        "text": "(변수#3)",
        "align": "center",
        "width": "120px",
      },{
        "value":"var1",
        "text": "(변수#4)",
        "align":"center",
        "width": "120px",
      },{
        "value":"tools",
        "text": "관리",
        "align":"center",
        "width":"220px"
      }],
      id: 0
    };
  },
  methods: {
    createDefaultTreeNode({ name, bookmark = false }) {
      return {
        id: this.id++,
        name: name ?? "(제목없음)",
        bookmark,
        children: [],
        editable: false,
        users:[],
      };
    },
    handleNewTreeNode(payload) {
      console.log(payload);
      if (payload.selectedNode === undefined) {
        this.addressItems.push(this.createDefaultTreeNode({}));
      }
    },
    handleSelectRow(payload){
      console.log(payload);
      if(payload.selectedNode){

        this.rows = payload.selectedNode.users;
        return;
      }

      this.rows = [];
    },

    //datagridview
    handleInsertNewRow(){

    }
  }
};
</script>

<style scoped>

</style>
