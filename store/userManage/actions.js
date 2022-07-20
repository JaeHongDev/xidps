export default {
  saveRows(context, payload) {
    const inserts = [];
    const updates = [];
    payload.rows.forEach((row) => {
      const copyRow = {
        v_index: row.v_index,
        id: row.id,
        name: row.name,
        number: row.number,
        position: row.position,
        var1: row.var1,
        var2: row.var2,
        var3: row.var3,
        var4: row.var4,
      };
      if (row.division === "INSERT") {
        inserts.push(copyRow);
        return;
      }
      if (row.division === "UPDATE") {
        updates.push({
          updatedRow: copyRow,
          index: context.getters.findByIndex({ user: row }),
        });
      }
    });

    context.commit("insertNew", inserts);
    //context.commit("updateRow", updates);
  },
};
