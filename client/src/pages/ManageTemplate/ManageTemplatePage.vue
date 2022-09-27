<script lang="ts" setup>
import AddressBook from '@/components/domain/AddressBook/AddressBook.vue';
import MessageTemplate from '@/components/domain/ManageTemplate/MessageTemplate.vue';
import CreateMessageTemplate from '@/components/domain/ManageTemplate/CreateMessageTemplate.vue';
import { customModalComposable } from '@/components/common/CustomModal/CustomModalComposable';
import CustomModal from '@/components/common/CustomModal/CustomModal.vue';
import { reactive } from 'vue';

const createTemplateModal = customModalComposable({ title: '템플릿 작성', isShow: true });
const data = reactive({
  templates: [{ title: '11', content: 'aa' }],
});

interface ICreateTemplatePayload {
  title: string;
  content: string;
}
const addTemplate = ({ title, content }: ICreateTemplatePayload) => {
  data.templates.unshift({ title, content });
};
</script>

<template>
  <v-card>
    <custom-modal :is-show="createTemplateModal.isShow" :width="600" :title="createTemplateModal.title" @close="createTemplateModal.closeModal">
      <v-row no-gutters>
        <v-col cols="9">
          <v-card class="message-editor mr-2" >
            <v-card-text>
              <v-text-field dense label='제목없음'></v-text-field>
              <v-textarea>
              </v-textarea>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="d-flex flex-column pa-2">
              <v-btn outlined class="mt-1" >학생</v-btn>
              <v-btn outlined class="mt-1" >학생</v-btn>
              <v-btn outlined class="mt-1" >학생</v-btn>
              <v-btn outlined class="mt-1" >학생</v-btn>
              <v-btn outlined class="mt-1" >학생</v-btn>
              <v-btn outlined class="mt-1" >학생</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-card-text>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="light-navy-button" width="120" >저장하기</v-btn>
      </v-card-actions>
    </custom-modal>
    <v-card-title class="fs-4 fw-semi-bold light-navy-blue">템플릿 관리</v-card-title>
    <div class="d-flex flex-wrap pa-3">
      <create-message-template class="ma-3" @click="createTemplateModal.openModal"></create-message-template>
      <message-template class="ma-3" v-for="i in [1,2,3,4,5,6]" :key="i"></message-template>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
</style>
