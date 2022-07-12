import FileUploader from "@/components/Molecule/FileUploader/FileUploader";

import {VApp} from "vuetify/lib/components";

export default{
  title:"Molecule/FileUploader",
  component:FileUploader
}

const Template = (args,{argsType}) =>({
  components: {FileUploader,VApp},
  props:Object.keys(args),
  template: `<v-app><file-uploader v-bind="$props"></file-uploader></v-app>`
})

export const sample = Template.bind({})
