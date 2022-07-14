<template>
  <div>
    <span class='fs-6 warm-grey fw-semi-bold'>발신번호</span>
    <v-text-field outlined hide-details></v-text-field>
    <span class='fs-6 warm-grey fw-semi-bold'>통신서비스 이용가입증명원</span>
    <file-uploader></file-uploader>
    <v-checkbox dense label='위탁발신번호 여부' hide-details></v-checkbox>

    <span class='fs-6 warm-grey fw-semi-bold'>위탁자 신분증 또는 재직증명서</span>
    <file-uploader></file-uploader>

    <span class='fs-6 warm-grey fw-semi-bold'>발신번호 위임장</span>
    <file-uploader></file-uploader>

    <div class='d-flex'>
      <div>
        <span>* 전기통신사업법 제 84조에 따라 사전 등록되지 않은 발신 번호로 메시지를 발송할 수 없습니다.</span><br>
        <span>* 통신서비스 이용 증명원, 재직증명서는 1개월 이내 발급된 서류만 유효합니다</span>
      </div>
      <v-btn class='ml-3'>
        통신서비스이용증명원 인증 확인
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallerNumberForm"
}
</script>

<style scoped>

</style>
