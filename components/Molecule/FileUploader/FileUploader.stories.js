import FileUploader from "@/components/Molecule/FileUploader/FileUploader";

export default{
  title:"Molecule/FileUploader",
  component:FileUploader
}

const Template = (args,{argsType}) =>({

  components: {FileUploader},
  props:Object.keys(args),
  template: `<file-uploader v-bind="$props"></file-uploader>`
})

export const sample = Template.bind({})
