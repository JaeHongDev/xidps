<template>
  <v-dialog class='rounded' v-show='showModal' width='500'>
    <v-card>
      <v-card-actions>
        <span>title</span>
        <v-spacer></v-spacer>
        <v-btn icon @click='handleCloseModal'><v-icon>mdi-close</v-icon></v-btn>

      </v-card-actions>
      <v-card-text>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-text>
        content
      </v-card-text>
      <v-card-actions>
        <v-btn>previous</v-btn>
        <v-btn>next</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from 'vue';
import { ICustomModal } from '@/components/common/CustomModal/CustomModalComposable';

export default defineComponent({
  name: 'CustomModal',
  props: {
    isShow: {
      type: Boolean as PropType<boolean>,
      default() {
        return false;
      },
    },
  },
  setup(props: ICustomModal, { emit }) {
    const showModal = ref(props.isShow);
    const handleCloseModal = () => {
      showModal.value = emit('close');
    };
    return {
      handleCloseModal,
      showModal,
    };
  },
});
</script>

<style scoped>

</style>
