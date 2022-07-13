import DataGridView from "@/components/Organism/DataGridView/DataGridView";
import {VApp} from "vuetify/lib/components";

export default {
  title: "Organism/DataGridView",
  component: DataGridView
}

const Template = (args, {argsType}) => ({
  components: {DataGridView, VApp},
  props: Object.keys(args),
  template: `
    <v-app>
    <data-grid-view v-bind='$props'>
      <template v-slot:state-basic='{item}'>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.number}}</td>
        <td>{{item.position}}</td>
      </template>
    </data-grid-view>
    </v-app>`
})

export const scrollDataGridView = Template.bind({});
scrollDataGridView.args = {
  useDefaultHeaders: false,
  useDefaultEditor: false,
  usePageable: false,
  useSelector: false,
  headers: [
    {value: "id", text: "ID", align: "center", width: "100px", changeAble: false},
    {value: "name", text: "이름", align: "center", width: "200px", changeAble: true},
    {value: "number", text: "전화번호", align: "center", width: "150px", changeAble: true},
    {value: "position", text: "구분", align: "center", width: "150px", changeAble: true},
  ],
  rows: [
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
    {id: "1", name: "1", number: "1", position: "1"},
  ],
}
