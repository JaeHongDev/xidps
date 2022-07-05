import DataGridView from "@/components/Organism/DataGridView/DataGridView";
import {VApp} from "vuetify/lib/components";
export default {
  title: "Organism/DataGridView",
  component:DataGridView
}

const Template = (args, {argsType}) => ({
  components:{DataGridView,VApp},
  template:'<v-app><data-grid-view></data-grid-view></v-app>'
})

export const sample = Template.bind({});
