export default {
  insertNew: ({state}, callerManager) => {
    state.callerNumbers.unshift(callerManager);
  },
  removeRow: ({state}, index) => {
    state.callerNumbers.splice(index, 1);
  },
  updateRow(context, payload) {
    context.state.callerNumbers.splice(payload.index, 1, payload.updatedRow);
  }
}
