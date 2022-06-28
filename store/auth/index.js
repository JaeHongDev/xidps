import api from "@/helper/api/api";

export const state = () => ({
  userId:"",
  userPassword:"",
  token:"",
})

export const mutations = {
  setValue(state,{target,value}){
    state[target] = value;
  },
  setToken(state,token){
    state.token = token;
  },
  setUserId(state, value){
    state.auth.userId = value;
  },
  setUserPassword(state,password){
    state.auth.userPassword = password;
  }
}

export const actions = {
  async requestLogin(context){
    const {l_time} =  await api.get("https://otp.xidsys.co.kr/mbs/access");
    console.log(l_time);
    const data ={
      str1:context.state.userId,
      str2:context.state.userPassword,
      long1:l_time
    };
    const result = await api.post("https://otp.xidsys.co.kr/mbs/lo_ent",data)
    console.log(result);
    context.commit("setToken",result.token);

    /*const requestUserData = await api
      .post("https://otp.xidsys.co.kr/mbs/add_usr_inf",{
        Authorization:`Bearer ${context.state.token}`
      })
    console.log(requestUserData);*/
  }
}
