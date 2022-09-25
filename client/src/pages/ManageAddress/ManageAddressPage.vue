<script lang='ts' setup>
import AddressBook from '@/components/domain/AddressBook/AddressBook.vue';
import { reactive } from 'vue';
import { IAddressBook, IAddressInsertPayload } from '@/components/domain/AddressBook/IAddressBook';

type ManagedAddressPage = {
  addressBook: IAddressBook[],
  index: number
}
const data = reactive<ManagedAddressPage>({
  addressBook: [],
  index: 0,
});

// eslint-disable-next-line no-return-assign
const createDefaultAddress = ():IAddressBook => ({
  id: data.index += 1,
  name: '(제목없음)',
  children: [],
});
const addNewAddressBook = ({ id }:IAddressInsertPayload) => {
  // 부모 선택
  if (id === -1) {
    data.addressBook.push(createDefaultAddress());
  }

  const find = (addressBook: IAddressBook[]) => {
    const findAddress = addressBook.find((address) => address.id === id);
    if (findAddress) {
      findAddress.children.push(createDefaultAddress());
    }

    for (let i = 0; i < addressBook.length; i += 1) {
      const node = addressBook[i];
      if (node.children) {
        find(node.children);
      }
    }
  };
  find(data.addressBook);
};

</script>

<template>
  <v-row>
    <v-col md='3'>
      <address-book
        @click:add='addNewAddressBook'
        :address-items='data.addressBook'
      ></address-book>
    </v-col>
    <v-col>
    </v-col>
  </v-row>
</template>

<style lang='scss' scoped>
</style>
