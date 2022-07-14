import {ExcelProvider} from "@/plugins/services/excel/ExcelProvider";


export default ({app},inject)=>{
  const excelProvider =new ExcelProvider();
  inject("excel",excelProvider);
}
