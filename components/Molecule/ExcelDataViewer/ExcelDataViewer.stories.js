import ExcelDataViewer from "@/components/Molecule/ExcelDataViewer/ExcelDataViewer";
import {VApp} from "vuetify/lib/components";

export default {
  component: ExcelDataViewer,
  title: "Molecule/ExcelDataViewer",
}

const Template = (args, {argsType}) => ({
  props: Object.keys(args),
  components: {ExcelDataViewer, VApp},
  template: `
    <v-app>
    <excel-data-viewer v-bind='$props'></excel-data-viewer>
    </v-app>`
})

export const scrollableTable = Template.bind({});
scrollableTable.args = {
  headers:[
    {value: "id", text: "아이디", align: "center", width: "100px"},
    {value: "name", text: "아이디", align: "center", width: "100px"},
    {value:"number",text:"전화번호", align: "center",width:"100px"},
    {value: "position", text: "아이디", align: "center", width: "100px"},
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
    {id: "1", name: "1", number: "1", position: "1"}
    ]
}
