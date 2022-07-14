export const mutations = {
  insertNew:({state},{callerManager}) =>{
    state.callerNumbers.unshift(callerManager);
  }
}
