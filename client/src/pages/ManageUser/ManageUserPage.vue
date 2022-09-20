<template>
  <div>
    <v-card class='division-setting'>
      <v-card-title>
        <span class='fs-4'>구분값 설정</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col mb='8' sm='2' style='flex-basis: 300px'>
            <v-select dense hide-details outlined></v-select>
          </v-col>
          <v-col v-for='i in [1,2,3,4]' style='flex-basis: 300px' :key='i'>
            <div class='d-flex'>
              <v-radio label='PUSH'></v-radio>
              <v-text-field suffix='건' dense hide-details label='3000'  class='mb-2'></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class='mt-5'>
      <v-card-actions>
        <v-spacer></v-spacer>
        <edit-handler-group></edit-handler-group>
      </v-card-actions>
      <v-card-title>
        <data-grid-view></data-grid-view>
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang='ts'>
import EditHandlerGroup from '@/components/common/EditHandlerGroup/EditHandlerGroup.vue';
import DataGridView from '@/components/common/DataTable/DataGridView.vue';

export default {
  name: 'ManageUserPage',
  components: { DataGridView, EditHandlerGroup },
};
</script>

<style scoped lang='scss'>
@import "~@/assets/scss/variables.scss";
.division-setting{
  min-height:150px;
  span{
    color: $light-navy-blue;;
  }
}
::v-deep input{
  text-align: right;
}

</style>
