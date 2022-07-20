export default {
  findByIndex: (context) => (payload) => {
    return context.state.users.findIndex(
      (user) => user.v_index === payload.user.v_index
    );
  },

  findByHeaderName: (context) => (payload) => {
    return context.state.users.filter((user) => {
      return user[payload.searchColumnName].toString().includes(payload.searchText);
    });
  },
};
