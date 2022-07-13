import UserExcelLoader from "@/components/Organism/UserExcelLoader/UserExcelLoader";
import {VApp} from "vuetify/lib/components";

export default {
  title: "Organism/UserExcelLoader",
  component: UserExcelLoader
}

const Template = (args, {argTypes}) => ({
  components: {UserExcelLoader, VApp},
  props: Object.keys(args),
  template: `
    <v-app>
    <user-excel-loader></user-excel-loader>
    </v-app>`
})

export const sample = Template.bind({});



