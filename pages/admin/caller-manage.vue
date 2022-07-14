<template>
  <data-grid-view>

  </data-grid-view>
</template>

<script>


export default {
  name: "CallerManage",

  data() {
    return {
      rows: [],
      headers: [],
    }
  },
  methods: {
    createDefault({callerNumber, manager, department, status, memo,}) { // 초기 값
      return {
        editable: false,
        division: "INSERT",
        callerNumber: callerNumber ?? "",
        manager: manager ?? "",
        department: department ?? "",
        status: status ?? "",
        memo: memo ?? "",
      }
    },
    createEditDefault({manager, departmentmmemo}) { // 편집 할 대상의 초기 값
      return {
        manager: manager ?? "",
        department: department ?? "",
        memo: memo ?? "",
      }
    },

  }
}
</script>

<style scoped>

</style>
