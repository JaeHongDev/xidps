<template>
  <div>
    <v-select></v-select>
  </div>
</template>

<script>
export default {
  name: "SettingDivisionValue",
  props: {
    settings: {
      type:Array,

      default: function () {
        return [];
      }
    }
  },
  computed: {
    extractMessages() {
      return this.settings.map(setting => {
        return setting.division
      })
    }
  }
}
</script>

<style scoped>

</style>
