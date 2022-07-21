<template>
  <v-form ref="form"
          v-model="valid"
          lazy-validation>
    <span class="fs-6 warm-grey fw-semi-bold">발신번호</span>
    <v-text-field outlined dense v-model="number" :rules="rules"></v-text-field>
    <div>
      <span class="fs-6 warm-grey fw-semi-bold">통신서비스 이용가입증명원</span>
      <file-uploader></file-uploader>
      <v-checkbox dense label="위탁발신번호 여부" hide-details></v-checkbox>

      <span class="fs-6 warm-grey fw-semi-bold">위탁자 신분증 또는 재직증명서</span>
      <file-uploader></file-uploader>

      <span class="fs-6 warm-grey fw-semi-bold">발신번호 위임장</span>
      <file-uploader></file-uploader>

      <div class="d-flex pt-8">
        <div class="fs-6">
          <span>* 전기통신사업법 제 84조에 따라 사전 등록되지 않은 발신 번호로 메시지를 발송할 수 없습니다.</span><br>
          <span>* 통신서비스 이용 증명원, 재직증명서는 1개월 이내 발급된 서류만 유효합니다</span>
        </div>
        <v-btn class="ml-3" :disabled="!valid" @click="handleSave">
          통신서비스이용증명원 인증 확인
        </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "CallerNumberForm",
  data() {
    return {
      valid: false,
      rules: [
        value => !!value || "Required.",
        value => (/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(value) || /^\d{2,3}-\d{3,4}-\d{4}$/.test(value)) || "발신번호 양식이 맞지 않습니다."
      ],
      number: ""
    };
  },
  methods: {
    handleSave() {
      this.$emit("click:save", { number: this.number });
      this.number = "";
    }
  },
  updated() {
  }
};
</script>

<style scoped>

</style>
