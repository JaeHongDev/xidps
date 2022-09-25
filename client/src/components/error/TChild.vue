<script lang='ts' setup>
import { withDefaults, defineProps, defineEmits } from 'vue';

interface Child {
  start: string
}

const emit = defineEmits<{(e: 'select', key: number): void,
  (e: 'click:remove'): void,
  (e: 'click:save'): void
  (e: 'click:add'): void
}>();
const props = withDefaults(defineProps<Child>(), {});
</script>

<template>
  <div>
    <button @click='emit("click:add")'>
      {{props.start}}
    </button>
  </div>

</template>

<style lang='scss' scoped>
</style>
