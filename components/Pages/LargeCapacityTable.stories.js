import Default from "@/layouts/default";
import LargeCapacityTable from "@/components/Pages/LargeCapacityTable";
import { VApp } from "vuetify/lib/components";
export default {
  title: "Pages/LargeCapacityTable",
  component: LargeCapacityTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Default, LargeCapacityTable, VApp },
  template: `
    <v-app><large-capacity-table v-bind=$props></large-capacity-table></v-app>`,
});

export const sample = Template.bind({});
