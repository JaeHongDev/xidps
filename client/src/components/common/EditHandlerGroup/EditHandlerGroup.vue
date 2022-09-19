<template>
  <div class="xidps-container">
    <!-- <search-text-box v-show="useSearch"  :search-columns="searchHeaders"  @click:search="handleSearch"></search-text-box> -->
    <v-btn v-show="useButtons.useDelete" @click="handleRemove" class="xidps-btn xidps-btn-delete" outlined elevation="0">삭제</v-btn>
    <v-btn v-show="useButtons.usePersonalizedUser" class="xidps-btn xidps-btn-personalize" outlined elevation="0"><v-icon>mdi-users</v-icon>개인 사용자 모아보기</v-btn>
    <v-btn v-show="useButtons.useImportExcel" class="xidps-btn xidps-btn-add xidps-btn-import" elevation="0" @click='$emit("click:import")'><v-icon>mdi-plus</v-icon>엑셀 추가</v-btn>
    <v-btn v-show="useButtons.useAdd" class="xidps-btn xidps-btn-add" elevation="0" @click="$emit('click:add')"><v-icon>mdi-plus</v-icon>추가</v-btn>
    <v-btn v-show="useButtons.useSave"  class="xidps-btn xidps-btn-save" elevation="1">저장하기</v-btn>
  </div>
</template>

<script lang='ts'>
import { IEditHandlerGroup } from '@/components/common/EditHandlerGroup/EditHandlerGroupComposable';
import { defineComponent, PropType, SetupContext } from 'vue';

interface Events {
  'click:remove' : { a :string};
  'click:add' : number;
  foo?: string;
  bar: number;
  baz: { a: string, b: number };
}

interface SetupContextExtended<Event extends Record<string, any>> extends SetupContext {
  emit: <Key extends keyof Event>(event: Key, payload?: Event[Key]) => void;
}

export default defineComponent({
  props: {
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
  },
  setup(_, context: SetupContextExtended<Events>) {
    const handleRemove = () => {
      context.emit('click:remove', { a: '1' });
      context.emit('click:add');
    };

    return {
      handleRemove,
    };
  },
});

</script>

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
