import MessageCountIndicator from "@/components/Molecule/MessgeCountIndicator/MessageCountIndicator";
import { VApp } from "vuetify/lib/components";

export default{
  title:"Molecule/MessageCountIndicator",
  component:MessageCountIndicator
}

const Template = (args,{argsType})=>({
  components:{MessageCountIndicator,VApp},
  props: Object.keys(args),
  template:`<v-app><message-count-indicator v-model="$props"></message-count-indicator></v-app>`
})

export const sample = Template.bind({});
