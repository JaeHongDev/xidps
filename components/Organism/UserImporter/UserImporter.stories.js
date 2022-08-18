import UserImporter from "@/components/Organism/UserImporter/UserImporter";
import { VApp } from "vuetify/lib/components";


export default {
  title:"Organism/UserImporter",
  component: UserImporter
}

const Template = (args,{argsType}) =>({
  components:{VApp, UserImporter},
  props:Object.keys(args),
  template:`<v-app><user-importer v-bind="$props"></user-importer></v-app>`
})

export const sample = Template.bind({});

