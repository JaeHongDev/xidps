export default {
  insertNew: ({state}, user) => {
    state.users.unshift(...user);
  },
  removeRow: ({state}, index) => {
    state.users.splice(index, 1);
  },
  updateRow: ({state}, updates) => {
    updates.forEach(update => {
      state.users.splice(update.index, 1, update.updatedRow)
    })
  },
};
