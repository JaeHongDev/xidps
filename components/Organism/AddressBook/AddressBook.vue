<template>
  <v-card class="pa-7">
    <span class="fs-2 light-navy-blue">공통 주소록 그룹 관리</span>

    <div class="address-book-wrap">
      <v-text-field v-model="search" dense hide-details solo>
        <template v-slot:append>
          <v-btn icon @click="handleClickAddButton">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-text-field>

      <v-flex style="  overflow-x: auto;" xs12>
        <v-treeview
          v-model="tree"
          :filter="filter"
          :items="addressItems"
          :open="opens"
          :search="search"
          activatable
          class="address-book"
          dense

          expand-icon=""
          item-key="id"
          transition
          @update:active="handleChangeActive"
        >
          <template v-slot:prepend="{ item, open , leaf,active}" class="align-center">
            <v-btn icon @click="toggleTreeViewItem({item,leaf,open,active,$event})">
              <v-icon class="lavender">
                {{ open ? "mdi-folder-open" : "mdi-folder" }}
              </v-icon>
            </v-btn>

          </template>
          <template v-slot:label="{item,leaf,open,active}">
            <div style="min-width:240px">
              <div v-if="item.editable" class="d-flex align-center">
                <div style="width:100px;margin-bottom:10px">
                  <v-text-field v-model="editText" dense hide-details outline></v-text-field>
                </div>
                <v-btn class="light-navy-blue" icon @click.stop="handleEndEdit(item)">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <v-btn class="light-navy-blue" icon @click.stop="handleCancelEdit(item)">
                  <v-icon>mdi-cancel</v-icon>
                </v-btn>
              </div>
              <div v-else>
                <span style="margin-top:5px">{{ item.name }}</span>
                <v-btn v-show="active" class="light-navy-blue" icon @click.stop="handleStartEdit(item)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn v-show="active" class="light-navy-blue" icon @click.stop="handleDelete(item)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </template>
        </v-treeview>
      </v-flex>
    </div>
  </v-card>

</template>

<script>
export default {
  name: "AddressBook",
  data() {
    return {
      id: 0,
      selectedId: -1,
      search: "",
      opens: [],
      tree: [],
      editText: "",
      items: [],
      selectedNode: null
    };
  },
  props: {
    addressItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filter() {
      return (item, search, textKey) => item[textKey].indexOf(search) > -1;
    }
  },
  methods: {
    handleClickAddButton() {
      console.log(this.selectedNode);
      this.$emit("create:new-treenode", {
        selectedNode: this.selectedNode
      });

    },
    handleChangeActive(selectedNodes) {
      this.$emit("click:tree-node", {
        selectedNode: selectedNodes[0] === undefined ? this.findNodeById(selectedNodes[0]) : selectedNodes[0]
      });

    },


    findNodeById(id) {
      const findNode = (tree = [], id) => {
        const index = tree.findIndex(node => node.id === id);
        if (index !== -1) {
          return tree[index].children;
        }
        for (const node of tree) {
          if (node.children) {
            const result = findNode(node.children, id);
            if (result) return result;
          }
        }
        return null;
      };
      return findNode(this.tree, id);
    },

    findNodeParentById(id) {
      const findNode = (tree = [], id) => {
        const index = tree.findIndex(node => node.id === id);
        if (index !== -1) {
          return tree;
        }

        for (const node of tree) {
          if (node.children) {
            const result = findNode(node.children, id);
            if (result) return result;
          }
        }
        return null;
      };
      return findNode(this.tree, id);
    }
  }
};
</script>

<style lang="scss" scoped>
.address-book-wrap {
  border: 1px solid $light-gray;
}

.v-treeview-node__label {
  overflow: initial;
  text-overflow: initial;
}


.v-treeview {
  width: max-content;
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
