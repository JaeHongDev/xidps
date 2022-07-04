import DataTableHeader from "@/components/Molecule/DataTableHeader/DataTableHeader";
export default{
  title:"Molecule/DataTableHeader",
  components: DataTableHeader
}

const Template = (args,{argsType})=>({
  components:{DataTableHeader},
  props:Object.keys(args),
  template: `<data-table-header v-bind=$props></data-table-header>"`
})

export const sample = Template.bind({});
sample.args ={
  count:1000,
  title:"사용자 "
}
