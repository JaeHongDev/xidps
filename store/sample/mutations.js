export default {
  insertNewUser: (context, row) => {
    row.division = "SELECT";
    context.state.users.unshift(row);
  },
  updatedUser: ({state}, {row, index}) => {
    row.division = "SELECT";
    state.users.splice(index, 1, row);
  },

  changeStartEdit: ({state}, {index}) => {
    state.users.splice(index,1,{
      ...state.users[index],
      editable:true
    })
  },
  changeCancelEdit: ({state}, {index}) => {
    state.users[index].editable = false;
  },
  changeEndEdit: ({state}, {index, editUser}) => {
    state.users.splice(index, 1, {
      ...state.users[index],
      editable: false,
      division: "UPDATE",
      ...editUser
    });
  },
  removeRows: ({state, getter}, {indexes}) => {
    indexes.map(index => {
      state.users.splice(index, 1);
    })
  }
}

