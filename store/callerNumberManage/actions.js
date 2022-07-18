export default {
  saveRows(context, payload) {

    payload.rows.forEach(row => {
      const copyRow = Object.assign({}, row)

      delete copyRow.division;
      delete copyRow.editable;
      delete copyRow.status;

      if (row.division === "INSERT") {
        context.commit("insertNew", copyRow);
        return;
      }
      if (row.division === "UPDATE") {
        console.log(context.getters.findByIndex({callerNumber: row}));
        context.commit("updateRow", {
          updatedRow: copyRow,
          index: context.getters.findByIndex({callerNumber: row})
        })
      }
    })
  },

  removeRows(context, payload) {
    payload.indexes.forEach(index => context.commit("removeRow", index))
  }
}
