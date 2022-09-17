<template>
  <v-card class="auth-card">
    <v-card-title>title</v-card-title>
    <v-card-text>
      <!-- radio buttons -->
      radio buttons
    </v-card-text>
    <v-card-text v-bind='user'>
      <v-select dense></v-select>
      <v-text-field dense label="ID" ></v-text-field>
      <v-text-field dense label="PW" type="password" ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="light-navy-button" @click="click">로그인</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType, defineEmits } from 'vue';
import { IAuthInformation } from '@/pages/LoginPageCompsable';
import { useRouter } from 'vue-router/composables';

export default Vue.extend({
  name: 'AuthContainer',
  props: {
    user: {
      type: Object as PropType<IAuthInformation>,
      required: true,
    },
  },
  setup: (_, { emit }) => {
    const router = useRouter();
    const click = () => {
      emit('click:login');
      router.push('/');
    };
    return { click };
  },
});
</script>

<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
</style>
