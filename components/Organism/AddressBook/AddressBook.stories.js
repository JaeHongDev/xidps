import AddressBook from "@/components/Organism/AddressBook/AddressBook";
import {VApp} from "vuetify/lib/components";
export default{
  title:"Organism/AddressBook",
  component:AddressBook
}

const Template = (args,{argTypes}) =>({
  components:{
    VApp,
    AddressBook
  },
  props:Object.keys(args),
  template: `<v-app><address-book v-bind='$props'></address-book></v-app>`
})


export const sample = Template.bind({});
