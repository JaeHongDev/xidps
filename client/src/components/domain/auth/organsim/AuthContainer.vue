<template>
  <v-card class="auth-card">
    <v-card-title>title</v-card-title>
    <v-card-text>
      radio buttons
    </v-card-text>
    <v-card-text>
      <v-select dense></v-select>
      <v-text-field dense label="ID"></v-text-field>
      <v-text-field dense label="PW" type="password"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="light-navy-button">로그인</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  name: 'AuthContainer',
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
</style>
