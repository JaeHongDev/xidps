import SearchTextBox from "@/components/Molecule/SearchTextBox/SearchTextBox";
import {VApp} from "vuetify/lib/components";
export default{
  title:"Molecule/SearchTextBox",
  component:SearchTextBox,
}

const Template = (args,{argsType}) =>({
  components:{SearchTextBox,VApp},
  props:Object.keys(args),
  template:`<v-app><search-text-box v-bind="$props"></search-text-box></v-app>`
})

export const sample = Template.bind({});
sample.args = {
  searchColumns: [{value:"sample",text:"샘플1"}],
  searchText: ""
}
