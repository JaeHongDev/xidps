import CustomModal from "@/components/Molecule/CustomModal/CustomModal";
import {VApp} from "vuetify/lib/components";
import UserExcelLoader from "@/components/Organism/UserExcelLoader/UserExcelLoader";

export default {
  title: "Molecule/CustomModal",
  Component: CustomModal
}

const Template = (args, {argTypes}) => ({
  components: {
    CustomModal,
    VApp
  },
  props: Object.keys(args),
  template: `
    <v-app>
    <custom-modal v-bind='$props'>${args.content}</custom-modal>
    </v-app>`
})

export const sample = Template.bind({});
sample.args = {
  isShow: true,
  width:700,
  title:"샘플"
}

export const userUploadModal = Template.bind({});
userUploadModal.args = {
  content: `<user-excel-loader></user-excel-loader>`,
  isShow: true,
  width:900,
  title:"엑셀 업로드"
}

