import SettingDivisionValue from "@/components/Molecule/SettingDivisionValue/SettingDivisionValue";
import {VApp} from "vuetify/lib/components";

export default {
  title: "Molecule/SettingDivisionValue",
  component: SettingDivisionValue
}

const Template = (args, {argsType}) => ({
  components: {SettingDivisionValue, VApp},
  props: Object.keys(args),
  template: `
    <v-app>
    <setting-division-value v-bind='$props'></setting-division-value>
    </v-app>`
})

export const sample = Template.bind({});
sample.args = {
  settings: [
    {
      division: "학생", message: {
        PUSH: 1000,
        SMS: 1000,
        LMS: 1000,
        MMS: 1000
      }
    }
  ]
}
