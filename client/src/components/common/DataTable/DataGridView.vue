<template>
  <v-data-table
    class='data-grid-view'
    height='750'
    hide-default-footer

    dense
    :footer-props='{"items-per-page-options": [20]}'
    :items='rows'
    :headers='headers'
  >
    <template v-slot:item='{item,index,isSelected,select,active}'>
      <tr :key='index'>
        <td>
          <v-checkbox
            :input-value='isSelected'
            @click='select(item)'
            dense hide-details></v-checkbox>
        </td>
        <slot v-if='item.editable' name='state-edit' v-bind='{item:item,active}'></slot>
        <slot v-else name='state-basic' v-bind='{item:item,active}'></slot>
      </tr>
    </template>
  </v-data-table>
</template>

<script lang='ts'>
import {
  defineComponent, PropType, reactive, ref,
} from 'vue';

export default defineComponent({
  props: {
    rows: {
      type: Array as PropType<Array<any>>,
    },
    headers: {
      type: Array as PropType<Array<any>>,
    },
    useSelector: {
      type: Boolean as PropType<boolean>,
      default() {
        return true;
      },
    },
    usePageable: {
      type: Boolean as PropType<boolean>,
      default() {
        return true;
      },
    },
  },
  setup() {
    const selectedIndex = ref([]);
    const page = reactive({
      pageCount: 0,
      nowPage: 1,
    });
  },
});
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/components/DataTable/dataTable.scss";
</style>
