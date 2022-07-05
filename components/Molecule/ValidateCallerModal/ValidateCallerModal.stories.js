import ValidateCallerModal from "@/components/Molecule/ValidateCallerModal/ValidateCallerModal";
import {VApp} from "vuetify/lib/components";
export default{
  title:"Molecule/ValidateCallerModal",
  component: ValidateCallerModal
}

const Template = (args,{argsType}) =>({
  components:{
    VApp,ValidateCallerModal
  },
  template:'<v-app><validate-caller-modal></validate-caller-modal></v-app>'
})

export const sample = Template.bind({});
