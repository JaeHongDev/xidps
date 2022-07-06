import CallerManagerService from "@/store/callerManager/CallerManager.serivce";

const callerManagerService = new CallerManagerService();

let id = 1;

export const createCallerManagerEntity = (number,division="SELECT") => ({
  editable:false,
  division,
  id,
  number,
  name: "",
  department: "",
  status: "",
  memo: ""
});

export const state = () => ({
  managers: []
})

const getDefaultCallerManagers = () => {
  return [];
}


export const mutations = {
  insertRow(state, number) {
    const entity = callerManagerService.CreateOne();
    console.log(number);
    entity.number = number;
    state.managers.unshift(entity);
  },
  insertCallerManager(state, number) {
    state.managers.unshift(createCallerManagerEntity(number));
  },
  removeCallerManager(state, index) {
    state.managers.remove(index);
  },
  updateCallerManager(state, payload, index) {
    state.managers[index] = {
      ...payload
    }
  },
  updateByIndex(state, index, updatedValue) {

    state.managers[index] = {
      ...state.managers[index],
      ...updatedValue
    }
  },
  removeByIndex(state, index) {
    state.managers.splice(index, 1);
  },
  removeByIndexes(state, numbers) {
    numbers
      .sort()
      .reverse()
      .forEach(number =>  this.removeByIndex(state, number))
  },
  editState(state, index) {
    state.managers[index].editable = true;
  },
  cancelEditState(state, index) {
    state.managers[index].editable = false;
  }
}

export const getters = {
  getAll(state) {
    return state.managers;
  },
  findByName(state, payload) {
    return state.managers.filter((manager)=>{
      return manager[payload.columName].includes(payload.searchWord)
    });
  }
}

// api 리스트
// add caller manager
// remove caller manager
// update caller manager
// select caller manager

