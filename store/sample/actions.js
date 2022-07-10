export default{
  saveRows(context,rows){
    // request database

    // fail

    // success
    rows.forEach(row=>{
      if(row.division === "INSERT"){
        context.commit("insertNewUser",row);
      }
      if(row.division === "UPDATE"){
        context.commit("updatedUser",{
          index:context.getters.findIndex(row.id),
          row
        });
      }
    })
  }
}
