<script lang='ts' setup>
import { withDefaults, defineProps, defineEmits } from 'vue';

interface ICustomModal {
  isShow: boolean;
  title?: string;
  width?: number | string;
}
const props = withDefaults(defineProps<ICustomModal>(), {
  isShow: false,
  title: '',
  width: 900,
});

const emits = defineEmits<{(e:'close'):void}>();
const handleCloseModal = () => {
  emits('close');
};
</script>

<template>
  <v-dialog class='rounded'
            persistent
            :value='props.isShow' :width='props.width'>
    <v-card>
      <v-card-actions>
        <span>{{props.title}}</span>
        <v-spacer></v-spacer>
        <v-btn icon @click='handleCloseModal'><v-icon>mdi-close</v-icon></v-btn>
      </v-card-actions>
      <v-card-text>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
