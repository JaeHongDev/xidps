<template>
  <v-card class='pa-7'>
    <span class='fs-2 light-navy-blue'>공통 주소록 그룹 관리</span>

    <div class='address-book-wrap'>
      <v-text-field dense solo hide-details>
        <template v-slot:append>
          <v-btn icon @click='handleCreateNewFolder'>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-treeview
        class='address-book'
        v-model='tree'
        :items='items'
        activatable
        :open='opens'
        item-key='id'

        @update:active='handleChangeActive'
        expand-icon=''
        dense
        transition
      >
        <template v-slot:prepend='{ item, open , leaf,active}' class='align-center'>
          <v-row align='center' dense @click='toggleTreeViewItem({item,leaf,open,active,$event})'>
            <v-btn icon>
              <img v-if='item.bookmark' src='~/static/bookmark-true.png' alt=''/>
              <img v-else src='~/static/bookmark-false.png' alt=''/>
            </v-btn>
            <v-icon>
              {{open ? 'mdi-folder-open' : 'mdi-folder'}}
            </v-icon>
          </v-row>
        </template>
        <template v-slot:label='{item,leaf,open,active}'>
          <div @click='toggleTreeViewItem({item,leaf,active,open,$event})' style='width:100%'>
            {{item.name}}
            <v-btn icon @click.stop=''>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click.stop=''>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-treeview>
    </div>

  </v-card>

</template>

<script>
export default {
  name: "AddressBook",
  data() {
    return {
      id: 1,
      selectedId: -1,
      opens: [],
      tree: [],
      items: [{id: 0, name: "테스트", bookmark: false, children: []}]
    }
  },
  methods: {
    createDefaultTreeNode({name, bookmark = false}) {
      return {
        id: this.id++,
        name: name ?? "이름이름이름이름이름이름이름이름이름이름이름이름이름이름이름이름이름이름이름이름",
        bookmark,
        children: []
      }
    },
    showBookMarkImage(item) {
      return item.bookmark ? "~/static/bookmark-true.png" : "~/static/bookmark-false.png"
    },
    toggleTreeViewItem({item, active, leaf, open, $event}) {
      console.log("click");
      if (active) {
        $event.stopPropagation();
      }
      if (open) {
        this.$delete(this.opens, this.opens.indexOf(item.id))
        return;
      }

      this.selectedId = item.id;

      if (!leaf) {
        this.opens.push(item.id);
      }
    },
    handleChangeActive(props) {
      if (props.length) {
        this.selectedId = props[0];
        return;
      }
      this.selectedId = -1;

    },
    handleCreateNewFolder() {
      console.log(this.selectedId);
      if (this.selectedId === -1) {
        this.items.push(this.createDefaultTreeNode({}))
        return;
      }
      const recursiveObj = (arr, id) => {
        let index = arr.findIndex(item => item.id === id)
        if (index !== -1) {
          arr[index].children.push(this.createDefaultTreeNode({}))
          this.opens.push(arr[index].children[arr[index].children.length - 1].id)
          return arr;
        }
        arr.forEach((item) => {
          if (item.children) {
            recursiveObj(item.children, id)
          }
        })
        return arr;
      }
      recursiveObj(this.items, this.selectedId);
    }
  },
  insertTreeViewItem() {

  }
}
</script>

<style scoped lang='scss'>
.address-book-wrap {
  border: 1px solid $light-gray;
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
