export default {
  findByIndex: (context) => (payload) => {
    return context.state.users.findByIndex(
      (user) => user.v_index === payload.user.v_index
    );
  },

  findByHeaderName: (context) => (payload) => {
    return context.state.users.filter((user) => {
      return user[payload.searchColumnName].includes(payload.searchText);
    });
  },
};
