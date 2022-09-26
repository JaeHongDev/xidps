<script lang='ts' setup>
import {
  reactive, withDefaults, defineProps, defineEmits,
} from 'vue';

import { IAddressBook } from '@/components/domain/AddressBook/IAddressBook';

interface Props {
  addressItems?: IAddressBook[]
}

const prop = withDefaults(defineProps<Props>(), {
  addressItems: () => [{ id: 1, name: '22', children: [{ id: 2, name: '22' }] }],
});

const data = reactive({
  id: 0,
  selectedId: -1,
  tree: [],
  items: [],
  selectedNode: null,
});

</script>

<template>
  <div class='address-book-wrap'>
    <v-text-field v-model='data.search' dense hide-details solo>
      <template v-slot:append>
        <v-checkbox dense hide-details v-model='data.items'></v-checkbox>
      </template>
    </v-text-field>
    <div class='treeview-wrap'>
      <v-treeview
        :items='prop.addressItems'
        v-model='data.tree'
        activatable
        return-object
        dense
        class='address-book'
        transition
      >
        <template v-slot:prepend='{open}'>
          <v-btn icon>
            <v-icon class='lavender'>{{open ? "mdi-folder-open" : "mdi-folder"}}</v-icon>
          </v-btn>
        </template>
        <template #append='{item}'>
          <v-checkbox v-model='data.items' :value='item.id'></v-checkbox>
        </template>
      </v-treeview>
    </div>
  </div>
</template>

<style lang='scss'>
.address-book-wrap {
  border: 1px solid $light-gray;
  height:100%;
}

.treeview-wrap {
  overflow: auto;
}

.address-book {
  width: max-content;
}
</style>
