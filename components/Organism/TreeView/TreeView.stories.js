export default {
  title: "Organism/treeview",
}

const Template = (args, {argsType}) => ({
  components: {
    TreeView: () => import('~/components/Organism/TreeView/TreeView'),
    VApp: () => import('vuetify/lib/components/VApp') //VApp
  },
  props: Object.keys(args),

  template: `
    <v-app>
    <tree-view v-bind="$props"></tree-view>
    </v-app>`
})

export const sample = Template.bind({});
sample.args = {
  title:"Manager",
  items: [{
    id: 1, icon: "mdi-home", name: "대시보드", children: [
      {id: 7, icon: "mdi-home", name: "대시보드Children"},
      {id: 8, icon: "mdi-phone", name: "발신번호 관리Children"},
      {id: 9, icon: "mdi-account-plus", name: "사용자 관리Children"},
      {id: 10, icon: "mdi-folder-account", name: "공통 주소록 관리Children"},
      {id: 11, icon: "mdi-view-dashboard", name: "발송량 관리Children"},
      {id: 12, icon: "mdi-cog", name: "기능 설정Children"},
      {id: 13, icon: "mdi-home", name: "대시보드Children"},
      {id: 14, icon: "mdi-phone", name: "발신번호 관리Children"},
      {id: 15, icon: "mdi-account-plus", name: "사용자 관리Children"},
      {id: 16, icon: "mdi-folder-account", name: "공통 주소록 관리Children"},
      {id: 17, icon: "mdi-view-dashboard", name: "발송량 관리Children"},
      {id: 18, icon: "mdi-cog", name: "기능 설정Children"},
      {id: 19, icon: "mdi-home", name: "대시보드Children"},
      {id: 20, icon: "mdi-phone", name: "발신번호 관리Children"},
      {id: 21, icon: "mdi-account-plus", name: "사용자 관리Children"},
      {id: 22, icon: "mdi-folder-account", name: "공통 주소록 관리Children"},
      {id: 23, icon: "mdi-view-dashboard", name: "발송량 관리Children"},
      {id: 24, icon: "mdi-cog", name: "기능 설정Children"},
    ]
  },
    {id: 2, icon: "mdi-phone", name: "발신번호 관리"},
    {id: 3, icon: "mdi-account-plus", name: "사용자 관리"},
    {id: 4, icon: "mdi-folder-account", name: "공통 주소록 관리"},
    {id: 5, icon: "mdi-view-dashboard", name: "발송량 관리"},
    {id: 6, icon: "mdi-cog", name: "기능 설정"}]
}
