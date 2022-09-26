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
          :items='prop.addressItems'
          v-model='data.tree'
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
  width: max-content;
}
</style>

<!--<template>-->
<!--  <v-card class="pa-7">-->
<!--    <span class="fs-2 light-navy-blue">공통 주소록 그룹 관리</span>-->

<!--    <div class="address-book-wrap">-->
<!--      <v-text-field v-model="search" dense hide-details solo>-->
<!--        <template v-slot:append>-->
<!--          <v-btn icon @click="handleClickAddButton">-->
<!--            <v-icon>mdi-plus</v-icon>-->
<!--          </v-btn>-->
<!--        </template>-->
<!--      </v-text-field>-->

<!--      <v-flex style="  overflow-x: auto;" xs12>-->
<!--        <v-treeview-->
<!--          v-model="tree"-->
<!--          :filter="filter"-->
<!--          :items="addressItems"-->
<!--          :open="opens"-->
<!--          :search="search"-->
<!--          activatable-->
<!--          class="address-book"-->
<!--          dense-->

<!--          expand-icon=""-->
<!--          item-key="id"-->
<!--          transition-->
<!--          @update:active="handleChangeActive"-->
<!--        >-->
<!--          <template v-slot:prepend="{ item, open , leaf,active}" class="align-center">-->
<!--            <v-btn icon @click="toggleTreeViewItem({item,leaf,open,active,$event})">-->
<!--              <v-icon class="lavender">-->
<!--                {{ open ? "mdi-folder-open" : "mdi-folder" }}-->
<!--              </v-icon>-->
<!--            </v-btn>-->

<!--          </template>-->
<!--          <template v-slot:label="{item,leaf,open,active}">-->
<!--            <div style="min-width:240px">-->
<!--              <div v-if="item.editable" class="d-flex align-center">-->
<!--                <div style="width:100px;margin-bottom:10px">-->
<!--                  <v-text-field v-model="editText" dense hide-details outline></v-text-field>-->
<!--                </div>-->
<!--                <v-btn class="light-navy-blue" icon @click.stop="handleEndEdit(item)">-->
<!--                  <v-icon>mdi-check</v-icon>-->
<!--                </v-btn>-->
<!--                <v-btn class="light-navy-blue" icon @click.stop="handleCancelEdit(item)">-->
<!--                  <v-icon>mdi-cancel</v-icon>-->
<!--                </v-btn>-->
<!--              </div>-->
<!--              <div v-else>-->
<!--                <span style="margin-top:5px">{{ item.name }}</span>-->
<!--                <v-btn v-show="active" class="light-navy-blue" icon @click.stop="handleStartEdit(item)">-->
<!--                  <v-icon>mdi-pencil</v-icon>-->
<!--                </v-btn>-->
<!--                <v-btn v-show="active" class="light-navy-blue" icon @click.stop="handleDelete(item)">-->
<!--                  <v-icon>mdi-delete</v-icon>-->
<!--                </v-btn>-->
<!--              </div>-->
<!--            </div>-->
<!--          </template>-->
<!--        </v-treeview>-->
<!--      </v-flex>-->
<!--    </div>-->
<!--  </v-card>-->

<!--</template>-->
