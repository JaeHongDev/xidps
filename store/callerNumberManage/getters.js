export default {
  findByIndex: (context) => (payload) => {
    return context.state.callerNumbers.findIndex((callerNumber) => callerNumber.v_index === payload.callerNumber.v_index)
  }
}
