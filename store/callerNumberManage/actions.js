export default {
  saveRows(context, payload){
    payload.rows.forEach(row => {
      if (row.division === "INSERT") {
        const copyRow = Object.assign({},row)

        delete copyRow.division;
        delete copyRow.editable;
        context.commit("insertNew", copyRow);
      }
      if (row.division === "UPDATE") {
        context.commit("updateRow", {
          row: payload.row,
          updatedRow: payload.updatedRow
        })
      }
    })
  },

  removeRows(context,payload){
    payload.indexes.forEach(index=>context.commit("removeRow", index))
  }
}
