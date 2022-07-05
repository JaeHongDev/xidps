<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="900"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>
      <v-card>
        <div class="pa-3 fs-3 fw-semi-bold light-navy-blue  ">
          발신번호 추가
        </div>
        <v-divider></v-divider>
        <div class="pa-3">
          <span>발신번호</span>
          <v-text-field filled ></v-text-field>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="light-navy-blue text--white">통신서비스이용증명원 인증</v-btn>
          <v-btn class="light-navy-blue text--white">전화인증</v-btn>
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
  data(){
    return{
      dialog:true
    }
  }
}
</script>

<style scoped>

</style>
