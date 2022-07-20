export default {
  insertNew: ({ state }, callerManager) => {
    if (callerManager instanceof Array) {
      state.callerNumbers.unshift(...callerManager);
      return;
    }
    state.callerNumbers.unshift(callerManager);
  },
  removeRow: ({ state }, index) => {
    state.callerNumbers.splice(index, 1);
  },
  updateRow(context, payload) {
    context.state.callerNumbers.splice(payload.index, 1, payload.updatedRow);
  },
};
