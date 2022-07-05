import CallerManagerService from "@/store/callerManager/CallerManager.serivce";

const callerManagerService = new CallerManagerService();

export const state = () =>({
  managers:[]
})

export const mutations = {
  insertRow(state){
    state.managers.unshift(callerManagerService.CreateOne());
  }
}
