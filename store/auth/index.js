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
}

export const actions = {
  async requestLogin(context){
    const {l_time} =  await api.get("https://otp.xidsys.co.kr/mbs/access");

    const data ={
      str1:context.state.userId,
      str2:context.state.userPassword,
      long1:l_time
    };
    const result = await api.post("https://otp.xidsys.co.kr/mbs/lo_ent",data)
    if(result.token === null) return ;

    context.commit("setToken",result.token);
    await this.$router.push("/");

    /*const requestUserData = await api
      .post("https://otp.xidsys.co.kr/mbs/add_usr_inf",{
        Authorization:`Bearer ${context.state.token}`
      })
    console.log(requestUserData);*/
  }
}
