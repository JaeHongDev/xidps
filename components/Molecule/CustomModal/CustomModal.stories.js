import CustomModal from "@/components/Molecule/CustomModal/CustomModal";
import CustomModalMd from "@/components/Molecule/CustomModal/CustomModal.md";
import { VApp } from "vuetify/lib/components";
import UserExcelLoader from "@/components/Organism/UserExcelLoader/UserExcelLoader";
import CallerNumberForm from "@/components/Organism/CallerNumberForm/CallerNumberForm";

export default {
  title: "Molecule/CustomModal",
  Component: CustomModal,
  parameters: {
    componentSubtitle: "커스텀 모달입니다.",
    docs: {
      description: {
        component: CustomModalMd,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    CustomModal,
    VApp,
    UserExcelLoader,
    CallerNumberForm,
  },
  props: Object.keys(argTypes),
  template: `
    <v-app>
    <custom-modal v-bind='$props'>${args.content}</custom-modal>
    </v-app>`,
});

export const sample = Template.bind({});
sample.args = {
  isShow: false,
  width: 700,
  title: "샘플",
};

export const userUploadModal = Template.bind({});
userUploadModal.args = {
  content: `<user-excel-loader></user-excel-loader>`,
  isShow: false,
  width: 900,
  title: "엑셀 업로드",
};

export const callerNumberModal = Template.bind({});
callerNumberModal.args = {
  content: `<caller-number-form></caller-number-form>`,
  isShow: false,
  width: 750,
  title: "발신번호 추가",
};
