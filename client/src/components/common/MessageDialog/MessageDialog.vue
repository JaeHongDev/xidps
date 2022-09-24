<script lang='ts' setup>
import { PropType, defineProps, ref } from 'vue';

const props = defineProps({
  open: {
    type: Boolean as PropType<boolean>,
    required: true,
    default() {
      return true;
    },
  },
});

</script>

<template>
  <v-dialog persistent :value='true' width='500'>
    <v-card>
    <v-card-text>
      1234
    </v-card-text>
      1234
      <v-divider></v-divider>
      <v-card-actions></v-card-actions>
      </v-card>
  </v-dialog>
</template>

<style lang='scss' scoped>
</style>
