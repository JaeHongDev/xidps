let id = 1;

export const createCallerManagerEntity = (number, division = "SELECT") => ({
  editable: false,
  division,
  number,
  name: "",
  department: "",
  status: "",
  memo: "",
});

export const state = () => ({
  managers: [],
});

const getDefaultCallerManagers = () => {
  return [];
};

export const mutations = {
  insertCallerManagerByNumber(state, number) {
    state.managers.unshift(createCallerManagerEntity(number));
  },
  insertCallerManagerByRow(state, row) {
    state.managers.unshift(row);
  },
  removeCallerManager(state, index) {
    state.managers.remove(index);
  },
  updateByIndex(state, { index, payload }) {
    state.managers.splice(
      index,
      1,
      (state.managers[index] = {
        ...state.managers[index],
        ...payload,
      })
    );
  },

  updateByRowId(state, payload) {
    //state.managers.findIndex(payload)
    const index = state.managers.findIndex(
      (manager) => manager.number === payload.number
    );
    state.managers.splice(index, 1, payload);
  },
  removeByIndex(state, index) {
    state.managers.splice(index, 1);
  },
  removeByIndexes(state, numbers) {
    numbers
      .sort()
      .reverse()
      .forEach((number) => this.removeByIndex(state, number));
  },
  editState(state, index) {
    state.managers[index].editable = true;
  },
  cancelEditState(state, index) {
    state.managers[index].editable = false;
  },
};

export const getters = {
  getAll(state) {
    return state.managers;
  },
  findByName: (state) => (payload) => {
    console.log(payload);
    console.log("search start");
    return state.managers.filter((manager) => {
      return manager[payload.searchColumnName].includes(payload.searchText);
    });
  },
  findIndexById: (state) => (payload) =>
    state.managers.findIndex((manager) => manager.number === payload.number),
};

export const actions = {
  callerManagerRowsSave(state, rows) {
    rows.forEach((row) => {
      if (row.division === "INSERT") {
        row.division = "SELECT";
        this.commit("callerManager/insertCallerManagerByRow", row);
        return;
      }
      if (row.division === "UPDATE") {
        row.division = "SELECT";
        this.commit("callerManager/updateById", row);
        return;
      }
    });
  },
};

// api 리스트
// add caller manager
// remove caller manager
// update caller manager
// select caller manager
