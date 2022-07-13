<template>
  <v-dialog
    v-model='isShow'
    :width='width'
    class='rounded'>
    <v-card>
      <v-row>
        <v-col cols='7'>
          <v-card-title class='light-navy-blue fs-4'>
            {{title}}
          </v-card-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols='1'>
          <v-btn @click='closeModal' icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
export default {
  name: "customModal",
  props: {
    isShow: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    width: {
      type: Number,
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
      this.isShow = false;
    }
  }
}
</script>

<style scoped>

</style>
