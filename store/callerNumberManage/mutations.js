export default {
  insertNew: ({ state }, callerManager) => {
    state.callerNumbers.unshift(...callerManager);
  },
  removeRow: ({ state }, index) => {
    state.callerNumbers.splice(index, 1);
  },
  updateRow(context, payload) {
    payload.forEach((update) => {
      context.state.callerNumbers.splice(update.index, 1, update.updatedRow);
    });
  },
};
