<template>
  <div>
    <v-dialog
      v-model="isShowCallerModal"
      width="900"
      persistent
    >
      <v-card>
        <div class="pa-3 fs-3 fw-semi-bold light-navy-blue  ">
          발신번호 추가
          <v-btn @click="$emit('close-modal')" icon> <v-icon>mdi-close</v-icon></v-btn>
        </div>
        <v-divider></v-divider>
        <div class="pa-3">
          <span>발신번호</span>
          <v-text-field filled v-model="callNumber" ></v-text-field>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="light-navy-blue text--white">통신서비스이용증명원 인증</v-btn>
          <v-btn class="light-navy-blue text--white" @click="authenticationCaller">전화인증</v-btn>
        </v-card-actions>
        <v-card-text>
      </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ValidateCallerModal",
  props:{
    isShowCallerModal:{
      type:Boolean,
      default:function(){

      }
    }
  },
  data(){
    return{
      dialog:false,
      callNumber:""
    }
  },
  methods:{
    authenticationCaller(){
      this.$emit('insert-row',this.callNumber)
    }
  }
}
</script>

<style scoped>

</style>
