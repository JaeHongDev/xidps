<script setup lang ='ts'>
import {
  defineProps, PropType,
} from 'vue';
import { IEditHandlerGroup } from '@/components/common/EditHandlerGroup/EditHandlerGroupComposable';

const props = defineProps({
  useButtons: {
    type: Object as PropType<IEditHandlerGroup>,
    required: false,
    default(): IEditHandlerGroup {
      return {
        useAdd: true,
        useDelete: true,
        useSave: true,
        useSearch: true,
        useImportExcel: true,
        usePersonalizedUser: true,
      };
    },
  },
});

// eslint-disable-next-line no-undef
const emit = defineEmits<{(e: 'click:remove'): void,
  (e: 'click:add') : void
  (e: 'click:add-personalize'): void
  (e: 'click:import'): void
  (e: 'click:save') :void
}>();

const handleAdd = () => emit('click:add');
const handleAddPersonalize = () => emit('click:add-personalize');
const handleImportExcel = () => emit('click:import');
const handleSave = () => {
  const showDialog = window.confirm('저장하시겠습니까?');
  if (showDialog) emit('click:save');
};
const handleRemove = () => emit('click:remove');
</script>
<template>
  <div class="xidps-container" >
    <!-- <search-text-box v-show="useSearch"  :search-columns="searchHeaders"  @click:search="handleSearch"></search-text-box> -->
    <v-btn v-show="useButtons.useDelete" @click="handleRemove" class="xidps-btn xidps-btn-delete" outlined elevation="0">삭제</v-btn>
    <v-btn v-show="useButtons.usePersonalizedUser" @click='handleAddPersonalize' class="xidps-btn xidps-btn-personalize" outlined elevation="0"><v-icon>mdi-users</v-icon>개인 사용자 모아보기</v-btn>
    <v-btn v-show="useButtons.useImportExcel"  @click='handleImportExcel' class="xidps-btn xidps-btn-add xidps-btn-import" elevation="0"><v-icon>mdi-plus</v-icon>엑셀 추가</v-btn>
    <v-btn v-show="useButtons.useAdd" class="xidps-btn xidps-btn-add" @click='handleAdd' elevation="0"><v-icon>mdi-plus</v-icon>추가</v-btn>
    <v-btn v-show="useButtons.useSave" @click='handleSave'  class="xidps-btn xidps-btn-save" elevation="1">저장하기</v-btn>
  </div>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
.xidps-container {
  display: flex;
  align-items:flex-start;

  * {
    margin-right: 10px;
  }
}

.v-text-field {
  height: 30px !important;
}

.xidps-search-bar {
  width: 210px;
  height: 30px !important;
}

.xidps-btn-delete {
  color: $salmon !important;
  border: 1px solid $salmon;
}

.xidps-btn-import {
  width: 143px;
}

.xidps-btn-add {
  color: $light-navy-blue;
  border: 1px solid $light-navy-blue;
}

.xidps-btn-save {
  background-color: $dark-blue-grey !important;
  color: $white !important;
}
</style>
