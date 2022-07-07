import EditHandlerGroup from "@/components/Organism/EditHandlerGroup/EditHandlerGroup";
import {VApp} from "vuetify/lib/components";

export default {
  title: "Organism/EditHandlerGroup",
  components: EditHandlerGroup,
  argsType: {
    useSearch: {
      type: Boolean,
      description: "검색 버튼을 활성화 시킬 여부를 묻는 옵션"
    }
  },
  parameters: {
    docs: {
      useSearch: {
        description: {
          component: "검색 버튼을 활성화 옵션"
        }
      }
    }
  }

}

const Template = (args, {argsType}) => ({
  components: {EditHandlerGroup, VApp},
  props: Object.keys(args),
  template: `
    <v-app style="height:300px">
    <edit-handler-group style="width: 1000px" v-bind="$props"></edit-handler-group>
    </v-app>`
})

export const sample = Template.bind({});
sample.args = {
  useSearch: true,
  usePersonalizedUser: true,
  useDelete: true,
  useAdd: true,
  useImportExcel: true,
  useSave: true,
}

