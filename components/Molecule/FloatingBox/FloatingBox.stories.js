import FloatingBox from "@/components/Molecule/FloatingBox/FloatingBox";
import {VApp} from "vuetify/lib/components";

export default{
  title:"Molecule/FloatingBox",
  component: FloatingBox
}

const Template =(args,{argsType}) => ({
  props: Object.keys(args),
  components:{FloatingBox,VApp},
  template: `<v-app><floating-box v-bind='$props'></floating-box></v-app>`
});

export const callerNumberList = Template.bind({});
