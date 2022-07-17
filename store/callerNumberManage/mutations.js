export default {
  insertNew: ({state}, callerManager) => {
    state.callerNumbers.unshift(callerManager);
  },
  removeRow: ({state, commit, getters}, index) => {
    state.callerNumbers.splice(index, 1);
  },
  updateRow({state}, {callerNumber, updatedRow}) {
  }
}
