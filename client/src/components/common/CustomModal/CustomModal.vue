<script lang='ts' setup>
import { withDefaults, defineProps, defineEmits } from 'vue';

interface ICustomModal {
  isShow: boolean;
  title?: string;
}
const { isShow, title } = withDefaults(defineProps<ICustomModal>(), {
  isShow: false,
  title: '',
});

const emits = defineEmits<{(e:'close'):void}>();
const handleCloseModal = () => {
  emits('close');
};
</script>

<template>
  <v-dialog class='rounded'
            persistent
            :value='isShow' width='900'>
    <v-card>
      <v-card-actions>
        <span>{{title}}</span>
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
