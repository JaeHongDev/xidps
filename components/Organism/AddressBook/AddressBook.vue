<template>
  <v-card class='pa-7'>
    <span class='fs-2 light-navy-blue'>공통 주소록 그룹 관리</span>

    <div class='address-book-wrap'>
      <v-text-field dense solo  hide-details>
        <template v-slot:append>
          <v-btn icon>
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
          </div>
        </template>
        <template v-slot:append='{item,active, leaf,open}'>
          <div v-show='active' @click='toggleTreeViewItem({item,active,open,leaf,$event})' style='width:100%;'>
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
      opens: [],
      tree: [],
      items: [
        {id: 1, name: "그룹없음", bookmark: true},
        {
          id: 2, name: "학생", children: [
            {id: 3, name: "2015학번", bookmark: false}
          ]
        }
      ]
    }
  },
  methods: {
    showBookMarkImage(item) {
      return item.bookmark ? "~/static/bookmark-true.png" : "~/static/bookmark-false.png"
    },
    toggleTreeViewItem({item, active, leaf, open, $event}) {
      if (active) {
        $event.stopPropagation();
      }
      if (open) {
        console.log(this.opens);
        this.$delete(this.opens, this.opens.indexOf(item.id))
        console.log(this.opens);
        return;
      }

      if (!leaf) {
        this.opens.push(item.id);
      }


    },
  }

}
</script>

<style scoped lang='scss'>
.address-book-wrap {
  border: 1px solid $light-gray;
}

.address-book {
  height:700px;
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
