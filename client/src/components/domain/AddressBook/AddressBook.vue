<script lang='ts' setup>
import {
  defineEmits, defineProps, reactive, withDefaults,
} from 'vue';
import type { IAddressBook, IAddressInsertPayload, IClickItemPayload } from '@/components/domain/AddressBook/IAddressBook';

interface Props {
  addressItems?: IAddressBook[]
}

const prop = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<{(e: 'click:add', payload: IAddressInsertPayload): void, (e: 'click:item', payload: IClickItemPayload | null): void }>();

const data = reactive({
  id: 0,
  selectedId: -1,
  search: '',
  opens: [],
  tree: [],
  editText: '',
  items: [],
  selectedNode: null,
});

const handleClickAdd = () => {
  emit('click:add', { id: data.selectedId });
};
const handleChangeActive = (item: IAddressBook[]) => {
  if (item.length === 0) {
    data.selectedId = -1;
    emit('click:item', null);
    return;
  }
  // eslint-disable-next-line prefer-destructuring
  data.selectedId = item[0].id;
  emit('click:item', { item: item[0] });
};
</script>

<template>
  <v-card class='pa-7'>
    <span class='fs-2 light-navy-blue'>공통 주소록 그룹 관리</span>
    <div class='address-book-wrap'>
      <v-text-field v-model='data.search' dense hide-details solo>
        <template v-slot:append>
          <v-btn icon @click='handleClickAdd'>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <div class='treeview-wrap'>
        <v-treeview
          v-model='data.tree'
          :items='prop.addressItems'
          :open='data.opens'
          :search='data.search'
          activatable
          return-object
          dense
          class='address-book'
          transition
          @update:active='handleChangeActive'
        >
          <template v-slot:prepend='{open}'>
            <v-btn icon>
              <v-icon class='lavender'>{{open ? "mdi-folder-open" : "mdi-folder"}}</v-icon>
            </v-btn>
          </template>
          <template #label='{item,active}'>
            <div>
              <span>{{item.name}}</span>
              <v-btn v-show='active' class='light-navy-blue' icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn v-show='active' class='light-navy-blue' icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </template>
        </v-treeview>
      </div>

    </div>
  </v-card>
</template>

<style lang='scss'>
.address-book-wrap {
  border: 1px solid $light-gray;
}

.treeview-wrap {
  overflow: auto;
}

.address-book {
  min-width: 270px;
  height: 300px;
}
</style>
