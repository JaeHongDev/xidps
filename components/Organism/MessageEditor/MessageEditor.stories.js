import MessageEditor from "@/components/Organism/MessageEditor/MessageEditor";
import {VApp} from "vuetify/lib/components";

export default{
  title: "Organism/MessageEditor",
  component: MessageEditor
}

const Template = (args, {argsType}) =>({
  component:{VApp, MessageEditor},
  props: Object.keys(args),
  template: `<message-editor v-bind='$props'></message-editor>`
})


export const sample = Template.bind({});
