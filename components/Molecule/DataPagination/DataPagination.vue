<template>
  <ul data-test='page-area'>
    <li v-for='page in pages' data-test='page-lists'>
      {{page}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "DataPagination",
  props: {
    nowPage: {
      type: String | Number,
      default: function () {
        return 0;
      }
    },
    maxContentSize: {
      type: String | Number,
      default: function () {
        return 0
      }
    },
    itemCount: {
      type: String | Number,
      default: function () {
        return 0;
      }
    }
  },
  computed: {
    pages: function () {
      const maxContentSize = Number(this.maxContentSize);
      const itemCount = Number(this.itemCount);

      // 전체 컨텐츠 수 보다 현재 아이템 수가 더 큰 경우
      if (itemCount >= maxContentSize) {
        return [1]
      }

      return new Array(Math.ceil(maxContentSize / itemCount))
        .fill(0)
        .map((_, index) => index + 1)
        .filter((_, index) => index + 1 <= 10)
    }
  }
}
</script>

<style scoped>

</style>
