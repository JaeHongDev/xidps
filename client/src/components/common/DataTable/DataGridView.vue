<template>
  <v-data-table
    class='data-grid-view'
    height='750'
    hide-default-footer

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
import { PropType } from 'vue';

export default {
  name: 'DataGridView',
  props: {
    rows: {
      type: Array as PropType<Array<any>>,
    },
    headers: {
      type: Array as PropType<Array<any>>,
    },
  },
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/components/DataTable/dataTable.scss";
</style>
