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
            <radio-button class="pt-5" :lists="lists" v-on:call:Api="callApi"></radio-button>
            <div class="pt-3">
              <v-select outlined :items="items" label="기업 및 대학 선택" dense :loading="loading"
                        v-model="userAuthForm.selectedCompany"></v-select>
            </div>
            <div>
              <v-text-field @input="setChange($event,'userId')" label="ID" class="fc-light-navy-blue fw-semi-bold"
                            v-model="userAuthForm.id"></v-text-field>
              <v-text-field @input="setChange($event,'userPassword')" label="PW" class="fc-light-navy-blue fw-semi-bold"
                            v-model="userAuthForm.password" type="password"></v-text-field>
            </div>
            <v-fab-transition>
              <v-alert
                v-show="loginFail"
                prominent
                type="error"
                class="fs-6"
                dense
              >
                아이디 혹은 비밀번호가 존재하지 않습니다.
              </v-alert>
            </v-fab-transition>
            <v-row>
              <v-col cols="7">
                <span class="fc-light-navy-blue fs-7 fw-regular">서비스를 체험해보고 싶으신가요?</span>
              </v-col>
              <v-col cols="4">
                <a class="fc-light-navy-blue fs-5 fw-regular">체험하기</a>
              </v-col>
            </v-row>

            <div class="d-flex">
              <v-checkbox dense label='설정기억' class="fs-8" v-model="isSavedCompanyName"></v-checkbox>
              <v-checkbox dense label='아이디기억' class="ml-2 fs-6" v-model="isSavedId"></v-checkbox>
            </div>
          </div>
          <div class="float-end">
            <v-btn class="bg-light-navy-blue white--text" @click="handleLogin">로그인</v-btn>
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
import api from "@/helper/api/api";

export default {
  name: "Auth",
  data() {
    return {
      loading: false,
      lists: ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],
      items: [],
      userAuthForm: {
        id: "",
        password: "",
        selectedCompany: "",
      },
      isSavedCompanyName: false,
      isSavedId: false,
      loginFail: false,
    }
  },
  methods: {
    async callApi(index) {
      //console.log(this.items[index].text);
      this.selectedIndex = index;
      this.loading = true;
      const result = await api.get("http://localhost:4444/consonant")
      //this.items = result.map(item => item.text);
      this.$data.items = ["sample1", "sample2", "sample3", "sample4", "sample5", "sample6"]
      this.loading = false;
    },
    setChange(value, target) {
      console.log(value, target);
      this.$store.commit('auth/setValue', {
        target,
        value
      })
    },
    handleLogin() {
      //console.log(this.$data);
      console.log(this.$store.state.auth);
      this.$store.dispatch("auth/requestLogin");
      this.$data.loginFail = this.$data.userAuthForm.id !== "xidsys";
      if(this.$data.loginFail) return;

      this.$router.push("/");

    }
  }
}
</script>

<style scoped lang="scss">

.auth-container {
  width: 900px;
  border-radius: 40px;

  .auth-form-content {
    padding-right: 40px;

    .v-text-field {
      color: $light-navy-blue !important;
      width: 250px !important;
    }

    .v-input--checkbox {
      padding: 0 !important;
    }

    .v-btn {
      background-color: $light-navy-blue !important;
    }
  }
}

.auth-form-wrap {
  padding-top: 70px;
  padding-left: 100px;
  padding-bottom: 30px;
}

.auth-logo {
  background-image: url("~/static/login.png");
  height: 100%;
  background-size: cover;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

}


</style>

