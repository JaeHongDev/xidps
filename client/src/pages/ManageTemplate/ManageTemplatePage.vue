<script lang="ts" setup>
import AddressBook from '@/components/domain/AddressBook/AddressBook.vue';
import MessageTemplate from '@/components/domain/ManageTemplate/MessageTemplate.vue';
import CreateMessageTemplate from '@/components/domain/ManageTemplate/CreateMessageTemplate.vue';
import { customModalComposable } from '@/components/common/CustomModal/CustomModalComposable';
import CustomModal from '@/components/common/CustomModal/CustomModal.vue';
import { reactive } from 'vue';

interface ITemplate{
  title:string;
  content: string;
}
interface IManageTemplatePage{
  templateList: ITemplate[];
  template: ITemplate;
}

const createTemplateModal = customModalComposable({ title: '템플릿 작성', isShow: false });
const data = reactive<IManageTemplatePage>({
  templateList: [],
  template: {
    title: '',
    content: '',
  },
});

interface ICreateTemplatePayload {
  title: string;
  content: string;
}
const addTemplate = () => {
  data.templateList.unshift({ title: data.template.title, content: data.template.content });
  data.template.title = '';
  data.template.content = '';
  createTemplateModal.closeModal();
};

function removeTemplate(index:number) {
  data.templateList.splice(index, 1);
}

</script>

<template>
  <v-card>
    <custom-modal :is-show="createTemplateModal.modal.isShow" :width="600" :title="createTemplateModal.modal.title" @close="createTemplateModal.closeModal">
      <v-row no-gutters>
        <v-col cols="9">
          <v-card class="message-editor mr-2" >
            <v-card-text>
              <v-text-field dense label='제목없음' v-model='data.template.title'></v-text-field>
              <v-textarea v-model='data.template.content'>
              </v-textarea>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="d-flex flex-column pa-2">
              <v-btn outlined class="mt-1" >변수1</v-btn>
              <v-btn outlined class="mt-1" >변수2</v-btn>
              <v-btn outlined class="mt-1" >변수3</v-btn>
              <v-btn outlined class="mt-1" >변수4</v-btn>
              <v-btn outlined class="mt-1" >변수5</v-btn>
              <v-btn outlined class="mt-1" >변수6</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-card-text>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="light-navy-button" width="120" @click='addTemplate' >저장하기</v-btn>
      </v-card-actions>
    </custom-modal>
    <v-card-title class="fs-4 fw-semi-bold light-navy-blue">템플릿 관리</v-card-title>
    <div class="d-flex flex-wrap pa-3">
      <create-message-template class="ma-3" @click="createTemplateModal.openModal"></create-message-template>
      <message-template class="ma-3" v-for="(item,index) in data.templateList" :key="index" :title='item.title' :content='item.content' @delete='removeTemplate' :index='index'></message-template>
      <div v-for='(index) in new Array(11-data.templateList.length)' :key='index' class='empty-border ma-3'></div>
      <v-pagination
        :length="6"
      ></v-pagination>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
.empty-border{
  height: 300px;
  border: solid 1px $light-gray;
  width:220px;
}
</style>
