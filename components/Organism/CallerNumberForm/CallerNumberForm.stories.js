import {VApp} from "vuetify/lib/components";
import CallerNumberForm from "@/components/Organism/CallerNumberForm/CallerNumberForm";

export default {
  title: "Organism/CallerNumberForm",
  component: CallerNumberForm
}

const Template = (args, {argTypes}) => ({
  components: {
    VApp,
    CallerNumberForm
  },
  props: Object.keys(args),
  template: `
    <v-app>
    <caller-number-form v-bind='$props'></caller-number-form>
    </v-app>`
})

export const sample = Template.bind({});
