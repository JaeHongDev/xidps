import ScrollBox from "@/components/Molecule/ScrollBox/ScrollBox";
import { VApp } from "vuetify/lib/components";

export default {
  title: "Molecule/ScrollBox",
  component: ScrollBox,
};

const Template = (args, { argsType }) => ({
  component: { ScrollBox, VApp },
  props: Object.keys(args),
  template: `
    <v-app>
    <scroll-box v-bind=$props></scroll-box>
    </v-app>`,
});

export const sample = Template.bind({});
