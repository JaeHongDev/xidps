import VariableSelector from "@/components/Molecule/VariableSelector/VariableSelector";
import {VApp} from "vuetify/lib/components";

export default{
  title : "Molecule/VariableSelector",
  component: VariableSelector
}

const Template = (args, {argTypes}) =>({
  components:{
    VApp, VariableSelector
  },
  props: Object.keys(args),
  template : `<v-app><variable-selector v-bind='$props'></variable-selector></v-app>`
})

export const sample = Template.bind({});
