export default {
  insertNew: ({ state }, user) => {
    if (user instanceof Array) {
      state.users.unshift(user);
      return;
    }
    state.users.unshift(...user);
  },
  removeRow: ({ state }, index) => {
    state.users.splice(index, 1);
  },
  updateRow: ({ state }, payload) => {
    state.users.splice(payload.index, 1, payload.updateRow);
  },
};
