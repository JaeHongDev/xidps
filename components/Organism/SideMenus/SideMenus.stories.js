export default{
  title:"Organism/SideMenus",
}

const Template = (args,{argsType}) =>({
  components:{
    SideMenus:() => import("~/components/Organism/SideMenus/SideMenus"),
    VApp:() =>import('vuetify/lib/components/VApp') ,//VApp
    props:Object.keys(args),
  },
  props:Object.keys(args),
  template: `<v-app><SideMenus v-bind="$props"></SideMenus></v-app>`
})


export const Sample = Template.bind({});
Sample.args = {
  menuCollection:[
    {
      title:"Manager",
      items: [
        {id: 2, icon: "mdi-phone", name: "sample1" },
        {id: 3, icon: "mdi-account-plus", name: "sample2" },
        {id: 4, icon: "mdi-folder-account", name: "sample3" },
        ]
    }
  ],
}
