export default {
  saveRows(context, payload) {
    const inserts = [];
    const updates = [];
    payload.rows.forEach((row) => {
      const copyRow = {
        v_index: row.v_index,
        callerNumber: row.callerNumber,
        manager: row.manager,
        department: row.department,
        status: row.status,
        memo: row.memo,
      };
      if (row.division === "INSERT") {
        inserts.push(copyRow);
        return;
      }
      if (row.division === "UPDATE") {
        updates.push({
          updatedRow: row,
          index: context.getters.findByIndex({ callerNumber: row }),
        });
      }
    });
    context.commit("insertNew", inserts);

    /*payload.rows.forEach((row) => {
      const copyRow = Object.assign({}, row);

      delete copyRow.division;
      delete copyRow.editable;
      delete copyRow.status;

      if (row.division === "INSERT") {
        context.commit("insertNew", copyRow);
        return;
      }
      if (row.division === "UPDATE") {
        context.commit("updateRow", {
          updatedRow: copyRow,
          index: context.getters.findByIndex({ callerNumber: row }),
        });
      }
    });*/
  },

  removeRows(context, payload) {
    payload.indexes.forEach((index) => context.commit("removeRow", index));
  },
};
