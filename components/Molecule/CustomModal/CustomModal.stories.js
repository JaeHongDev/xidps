import CustomModal from "@/components/Molecule/CustomModal/CustomModal";
import {VApp} from "vuetify/lib/components";

export default {
  title: "Molecule/CustomModal",
  Component: CustomModal
}

const Template = (args, {argTypes}) => ({
  components: {
    CustomModal,
    VApp
  },
  props: Object.keys(args),
  template: `
    <v-app>
    <custom-modal v-bind='$props'></custom-modal>
    </v-app>`
})

export const sample = Template.bind({});
sample.args = {
  isShow: true,
  width:700,
  title:"샘플"
}

