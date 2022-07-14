
export default ({app}, inject) => {
  inject('excel', new ReadExcel())
}
