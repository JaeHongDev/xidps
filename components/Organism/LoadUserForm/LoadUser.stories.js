import LoadUserForm from "@/components/Organism/LoadUserForm/LoadUserForm";
import { VApp } from "vuetify/lib/components";

export default {
  title: "Organism/LoaduserForm",
  component: LoadUserForm,
};

const Template = (args, { argTypes }) => ({
  components: { LoadUserForm, VApp },
  props: Object.keys(argTypes),
  template: `<v-app><load-user-form v-model="$props"></load-user-form></v-app>`,
});
export const sample = Template.bind({});
