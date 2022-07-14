import {VApp} from "vuetify/lib/components";
import CallerManage from "@/pages/admin/caller-manage";

export default {
  title: "pages/CallerNumberManager",
  components: CallerManage
}

const Template = (args, {argTypes}) => ({
  components: {
    VApp,
    CallerManage
  },
  template: `
    <v-app>
    <caller-manage></caller-manage>
    </v-app>`
})

export const sample = Template.bind({});
sample.args ={}
