<template>
  <v-row>
    <v-col></v-col>
    <v-col>
      <data-grid-view
        :useDefaultHeaders="false"
        :useDefaultEditor="false"
        useSelector
        :usePageable="false">
      </data-grid-view>
    </v-col>
    <v-col>
      <v-card>
        
      </v-card>
    </v-col>
    <v-card-actions>
      <v-btn>저장하기</v-btn>
    </v-card-actions>
  </v-row>
</template>

<script>
export default {
  name: "LoadUserForm"
};
</script>

<style scoped>

</style>
