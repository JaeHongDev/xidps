export default {
  findByIndex: (context) => (payload) => {
    console.log(payload);
    return context
      .state
      .callerNumbers
      .findIndex(
        (callerNumber) => callerNumber.v_index === payload.callerNumber.v_index)
  },

  findByHeaderName: (context) => (payload) => {
    console.log(payload);
    return context
      .state
      .callerNumbers
      .filter((callerNumber) => {
        return callerNumber[payload.searchColumnName].includes(payload.searchText)
      })
  },
}
