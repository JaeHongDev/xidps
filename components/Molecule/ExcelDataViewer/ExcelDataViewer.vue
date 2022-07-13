<template>
  <!--
    <v-data-table
      :headers='headers'
      :items='rows'

      disable-sort
      disable-pagination
      hide-default-footer
      dense
      class='excel-data-viewer'
    >
    </v-data-table>
  -->

  <v-data-table
    :headers='headers'
    :items='rows'
    disable-sort
    disable-pagination
    hide-default-footer
    dense
    height='158'
    class='excel-data-viewer'
  >
  </v-data-table>

</template>

<script>
export default {
  // this component is only possible scroll table
  name: "ExcelDataViewer",
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    rows: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.excel-data-viewer {
  border: 1px solid #d6d6d6 !important;
  border-collapse: collapse;
  width: 750px !important;

  ::v-deep table {
    td, th {
      border: 1px solid #d6d6d6 !important;
      vertical-align: middle !important;
      text-align: center;

    }

    td {
      font-size: $fs5;
      color: $warm-grey;
    }

    th {

      color: $light-navy-blue !important;
      font-size: $semi-bold;
      border-spacing: 5px;
    }
  }

  ::v-deep .v-data-table-header {
    background-color: #ebebeb !important;
  }
}
</style>
