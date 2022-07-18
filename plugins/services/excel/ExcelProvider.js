export class ExcelProvider {
  constructor() {
    this.XLSX = require('xlsx');
  }


  getFile(files) {
    if (typeof files instanceof Array) {
      return this.getFiles(files);
    }

  }

  getFiles(files) {
    files.forEach(file => {
    })
    return this;
  }

  downloadUserExcel(rows) {

    const worksheet = this.XLSX.utils.json_to_sheet(rows);
    const workbook = this.XLSX.utils.book_new();

    this.XLSX.utils.book_append_sheet(workbook, worksheet, "users");
    this.XLSX.writeFile(workbook, "user.xlsx");
  }

  readUserExcel(arrayBuffer) {
    const json = this.XLSX.utils.sheet_to_json(
      this.XLSX.read(arrayBuffer).Sheets["users"],{header:1}
    );
    json.shift();
    console.log(json);
    return json;
  }
}


