import MessageEditorBody from "@/components/Molecule/MessageEditorBody/MessageEditorBody";
import {VApp} from "vuetify/lib/components";

export default {
  title : "Molecule/MessageEditorBody",
  component: MessageEditorBody
}

const Template = (args, {argTypes}) => ({
  components:{MessageEditorBody, VApp},
  props: Object.keys(args),
  template : `<v-app><message-editor-body v-bind='$props'></message-editor-body></v-app>`
})

export const sample = Template.bind({});
