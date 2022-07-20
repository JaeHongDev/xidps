<template>
  <v-card class="pa-7">
    <span class="fs-2 light-navy-blue">공통 주소록 그룹 관리</span>

    <div class="address-book-wrap">
      <v-text-field dense solo hide-details v-model="search">
        <template v-slot:append>
          <v-btn icon @click="handleCreateNewFolder">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-text-field>

      <v-flex xs12 style="  overflow-x: auto;">
        <v-treeview
          class="address-book"
          v-model="tree"
          :items="items"
          :filter="filter"
          :open="opens"
          :search="search"
          activatable
          item-key="id"

          @update:active="handleChangeActive"
          expand-icon=""
          dense
          transition
        >
          <template v-slot:prepend="{ item, open , leaf,active}" class="align-center">
            <div @click="toggleTreeViewItem({item,leaf,open,active,$event})">
              <v-icon class="lavender">
                {{ open ? "mdi-folder-open" : "mdi-folder" }}
              </v-icon>
            </div>
          </template>
          <template v-slot:label="{item,leaf,open,active}">
            <div @click="toggleTreeViewItem({item,leaf,active,open,$event})" style="min-width:240px">
              <div class="d-flex align-center" v-if="item.editable">
                <div style="width:100px;margin-bottom:10px">
                  <v-text-field outline dense hide-details v-model="editText"></v-text-field>
                </div>
                <v-btn icon @click.stop="handleEndEdit(item)" class="light-navy-blue">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <v-btn icon @click.stop="handleCancelEdit(item)" class="light-navy-blue">
                  <v-icon>mdi-cancel</v-icon>
                </v-btn>
              </div>
              <div v-else>{{ item.name }}
                <v-btn icon @click.stop="handleStartEdit(item)" class="light-navy-blue">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon @click.stop="handleDelete(item)" class="light-navy-blue">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </template>
        </v-treeview>
      </v-flex>
  </v-card>

</template>

<script>
export default {
  name: "AddressBook",
  data() {
    return {
      id: 0,
      selectedId: -1,
      search:"",
      opens: [],
      tree: [],
      editText: "",
      items: []
    };
  },
  computed: {
    filter () {
      return (item, search, textKey) => item[textKey].indexOf(search) > -1
    },
  },
  methods: {
    createDefaultTreeNode({ name, bookmark = false }) {
      return {
        id: ++this.id,
        name: name ?? "(제목없음)",
        bookmark,
        children: [],
        editable: false
      };
    },
    toggleTreeViewItem({ item, active, leaf, open, $event }) {
      if (active) {
        $event.stopPropagation();
      }
      if (open) {
        this.$delete(this.opens, this.opens.indexOf(item.id));
        return;
      }

      this.selectedId = item.id;

      if (!leaf) {
        this.opens.push(item.id);
      }
    },
    handleStartEdit(item) {
      this.editText = item.name;
      item.editable = true;
    },
    handleEndEdit(item) {
      item.name = this.editText;
      item.editable = false;
    },
    handleCancelEdit(item) {
      this.editText = "";
      item.editable = false;
    },
    handleChangeActive(props) {
      if (props.length) {
        this.selectedId = props[0];
        return;
      }
      this.selectedId = -1;
    },
    handleDelete(item) {
      console.log(item);
      if (item.children.length) {
        window.alert("삭제할 수 없습니다.");
        return;
      }
      const recursiveObj = (arr, id) => {
        let index = arr.findIndex(item => item.id === id);
        if (index !== -1) {
          console.log(index);
          this.$delete(arr, index);
          return;
        }
        arr.forEach(item => item.children ? recursiveObj(item.children, id) : "");
      };
      recursiveObj(this.items, item.id);
      console.log(this.items);
    },
    handleCreateNewFolder() {
      console.log(this.selectedId);
      if (this.selectedId === -1) {
        this.items.push(this.createDefaultTreeNode({}));
        return;
      }
      const recursiveObj = (arr, id) => {
        let index = arr.findIndex(item => item.id === id);
        if (index !== -1) {
          arr[index].children.push(this.createDefaultTreeNode({}));
          this.opens.push(arr[index].children[arr[index].children.length - 1].id);
          return arr;
        }
        arr.forEach((item) => {
          if (item.children) {
            recursiveObj(item.children, id);
          }
        });
        return arr;
      };
      recursiveObj(this.items, this.selectedId);
    }
  }
};
</script>

<style scoped lang="scss">
.address-book-wrap {
  border: 1px solid $light-gray;
}

.v-treeview-node__label {
  overflow: initial;
  text-overflow: initial;
}


.v-treeview {
  width:max-content;
}

.address-book {
  height: 700px;
  overflow-y: scroll;
  overflow-x: scroll;


  ::v-deep .v-treeview-node__root {
    padding: 0 !important;

    .v-treeview-node__content {
      margin-left: -24px !important;
    }

  }
  ::v-deep .v-treeview-node__toggle {
  }
}
</style>
