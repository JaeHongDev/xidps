<template>
  <v-dialog
    v-model='isShow'
    :width='width'
    persistent
    class='rounded'>
    <v-card>
      <v-row dense class='flex-row-reverse'>
        <v-btn @click='closeModal' icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-card-subtitle class='light-navy-blue fs-4'>
        {{title}}
      </v-card-subtitle>
      <v-card-subtitle>
        <v-divider class='warm-grey'></v-divider>
      </v-card-subtitle>
      <v-card-text>
        <slot></slot>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
/**
 - 커스텀 모달 컴포넌트입니다.
 - The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
 **/
export default {
  name: "customModal",
  props: {
    /**
     * 문서테스트
     */
    isShow: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    width: {
      type: Number | String,
      default: function () {
        return 700;
      }
    },
    title: {
      type: String,
      default: function () {
        return "이름없음";
      }
    }
  },

  methods: {
    closeModal() {
      this.$emit("button:click:close")
    }
  }
}
</script>

<style scoped>

</style>
