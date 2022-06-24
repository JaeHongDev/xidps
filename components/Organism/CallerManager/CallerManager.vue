<template>
  <v-card class="pa-3">
    <v-data-table dense :headers="headers" :items="items" hide-default-header="true" class="caller-manager-table">
      <template
        v-slot:header="{ props: { headers } }"
      >
        <thead>
        <tr>
          <th v-for="header in headers" class="fw-bold">{{ header.text }}</th>
        </tr>
        </thead>
      </template>

      <template v-slot:body="{items}">
        <tbody>
        <tr v-for="item in items">
          <td>{{ item.a }}</td>
          <td>{{ item.b }}</td>
          <td>{{ item.c }}</td>
          <td>{{ item.d }}</td>
          <td>{{ item.e }}</td>
          <td>{{ item.f }}</td>
        </tr>
        </tbody>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CallerManager",
  data() {
    return {
      headers: [
        {text: "발신번호"},
        {text: "담당자"},
        {text: "조직"},
        {text: "상태"},
        {text: "메모"},
        {text: "관리"},
      ],
      items: [
        {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1},
        {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1},
        {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1},
        {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1},
        {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1}

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.caller-manager-table {
  thead {
    //border-top: 1px solid $warm-grey !important;
    //border-bottom: 1px solid $warm-grey !important;
    border-left: none;
    border-right: none;
  }

  tbody {
    //border-bottom: 1px solid $warm-grey !important;
  }

  td {
    //border-right: 1px dashed  !important;
    border-bottom: none !important;
    text-align: center;
    //color: $light-navy-blue-color !important;
    vertical-align: middle !important;

  }

  th {
    //border-right: 1px dashed $white-two !important;
    text-align: center !important;
    vertical-align: middle !important;
    //color: $light-navy-blue-color !important;
    font-size: $semi-bold;
  }
  tr:hover{
    background-color:$pale-lilac !important;
  }
}
</style>
