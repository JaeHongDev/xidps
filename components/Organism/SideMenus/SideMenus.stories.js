export default{
  title:"Organism/SideMenus",
}

const Template = (args,{argsType}) =>({
  components:{
    SideMenus:() => import("~/components/Organism/SideMenus/SideMenus"),
    VApp:() =>import('vuetify/lib/components/VApp') ,//VApp
    props:Object.keys(args),
  },

  template: `<v-app><SideMenus v-bind="$props"></SideMenus></v-app>`
})


export const Sample = Template.bind({});
Sample.args = {
  items:[]
}
