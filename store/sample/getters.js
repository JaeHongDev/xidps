export default {
  allUsers: (state) => {
    return state.users;
  },
  searchUser: (context) => (payload) => {
    console.log(payload);
    return context
      .state
      .users
      .filter((user) => {
        return user[payload.searchColumnName].includes(payload.searchText)
      })
  },
  findByIndex: (context) => (index) => {
    return context.state.users[index]
  },
  findIndex: (context) => (id) => {
    console.log(context.state.users);
    return context.state.users.findIndex((item) => item.id === id);
  }
}
