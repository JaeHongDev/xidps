<template>
  <v-card class="auth-container">
    <v-row>
      <v-col class="auth-form-wrap" cols="6">
        <form>
          <div class="auth-form-content">
            <div>
              <v-icon small>mdi-send</v-icon>
              <span class="fs-1 fc-light-navy-blue fw-bold">
                XID메시징 서비스
              </span>
            </div>
            <radio-button :lists="lists" :selected-index="selectedIndex" v-on:call:Api="callApi"></radio-button>
            <div class="pa-3">
              <v-select outlined :items="items" label="대학선택" dense :loading="loading"></v-select>
            </div>
            <div>
              <v-text-field label="ID"></v-text-field>
              <v-text-field label="PW"></v-text-field>
            </div>
            <v-row>
              <v-col cols="8">
                <span>서비스를 체험해보고 싶으신가요?</span>
              </v-col>
              <v-col cols="4">
                <a>체험하기</a>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-checkbox label='설정기억'></v-checkbox>
              </v-col>
              <v-col>
                <v-checkbox label='아이디기억'></v-checkbox>
              </v-col>
            </v-row>
          </div>

          <div class="float-end">
            <v-btn @click="callApi">로그인</v-btn>
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
      selectedIndex: -1,
      loading: false,
      lists: [
        {text: "ㄱ"},
        {text: "ㄴ"},
        {text: "ㄷ"},
        {text: "ㄹ"},
        {text: "ㅁ"},
        {text: "ㅂ"},
        {text: "ㅅ"},
        {text: "ㅇ"},
        {text: "ㅈ"},
        {text: "ㅊ"},
        {text: "ㅋ"},
        {text: "ㅌ"},
        {text: "ㅍ"},
        {text: "ㅎ"}
      ],
      items: ['가나다대학교', '가대학교'],
    }
  },
  methods: {
    async callApi(index) {
      //console.log(this.items[index].text);
      this.selectedIndex = index;
      const result = await api.get("http://localhost:4444/consonant")
      this.loading = true;
      this.items = result.map(item => item.text);
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">


.auth-container {
  width: 900px;
  border-radius: 41px;
  .auth-form-content{
    padding-right:40px;
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
