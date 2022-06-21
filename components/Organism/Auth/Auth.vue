<template>
  <v-card class="auth-container">
    <v-row>
      <v-col class="auth-form-wrap" cols="6">
        <form>
          <div class="auth-form-content">
            <div class="d-flex align-center">
              <v-icon class="icon-size">mdi-send</v-icon>
              <span class="fs-1 fc-light-navy-blue fw-bold">
                XID메시징 서비스
              </span>
            </div>
            <radio-button class="pt-5" :lists="lists"  v-on:call:Api="callApi"></radio-button>
            <div class="pt-3">
              <v-select outlined :items="items" label="대학선택" dense :loading="loading"></v-select>
            </div>
            <div>
              <v-text-field label="ID" class="fc-light-navy-blue fw-semi-bold"></v-text-field>
              <v-text-field label="PW" class="fc-light-navy-blue fw-semi-bold"></v-text-field>
            </div>
            <v-row>
              <v-col cols="8">
                <span class="fc-light-navy-blue fs-7 fw-regular">서비스를 체험해보고 싶으신가요?</span>
              </v-col>
              <v-col cols="4">
                <a class="fc-light-navy-blue fs-5 fw-regular">체험하기</a>
              </v-col>
            </v-row>
            <v-row class="d-flex">
                <v-checkbox label='설정기억'></v-checkbox>
                <v-checkbox label='아이디기억'></v-checkbox>
            </v-row>
          </div>
          <div class="float-end">
            <v-btn class="bg-light-navy-blue" color="bg-light-navy-blue">로그인</v-btn>
          </div>
        </form>
      </v-col>
      <v-col cols="6">
        <div class="auth-logo">
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import api from "~/helper/api";

export default {
  name: "Auth",
  data() {
    return {
      loading: false,
      lists: ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],
      items: ['가나다대학교', '가대학교'],
    }
  },
  methods: {
    async callApi(index) {
      //console.log(this.items[index].text);
      this.selectedIndex = index;
      const result = await api.get("http://localhost:4444/consonant")
      this.loading = true;
      //this.items = result.map(item => item.text);
      this.items = ["sample1","sample2","sample3","sample4","sample5","sample6"]
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">

.auth-container {
  width: 900px;
  border-radius: 40px;
  .auth-form-content{
    padding-right:40px;

    .v-text-field{
      color:$light-navy-blue-color !important;
      width:250px !important;
    }

    .v-input--checkbox{
      padding:0 !important;
    }

    .v-btn{
      background-color:$light-navy-blue !important;
    }
  }
}
.auth-form-wrap {
  padding-top: 70px;
  padding-left: 100px;
  padding-bottom:30px;
}

.auth-logo {
  background-image: url("~/static/login.png");
  height: 100%;
  background-size:cover;
}


</style>
