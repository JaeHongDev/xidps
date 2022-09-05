import MessageEditor from "@/components/Molecule/MessageEditor/MessageEditor";
import {VApp} from "vuetify/lib/components";

export default {
  title : "Molecule/MessageEditor",
  component: MessageEditor
}

const Template = (args, {argTypes}) => ({
  components:{MessageEditor, VApp},
  props: Object.keys(args),
  template : `<v-app><message-editor v-bind='$props'></message-editor></v-app>`
})

export const sample = Template.bind({});
