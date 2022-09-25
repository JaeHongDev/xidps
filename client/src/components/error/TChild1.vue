<script lang='ts' setup>
import { defineProps, PropType } from 'vue';

interface TChild1 {
  start:string
}
interface Props {
  tChild: TChild1
}
const props = defineProps<TChild1>();
</script>

<template>
  <div>
    {{props.start}}
  </div>
</template>

<style lang='scss' scoped>
</style>
