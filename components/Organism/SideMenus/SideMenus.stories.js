export default{
  title:"Organism/SideMenus",
}

const Template = (args,{argsType}) =>({
  components:{
    SideMenus:() => import("~/components/Organism/SideMenus/SideMenus"),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp
  },

  template: `<v-app><SideMenus></SideMenus></v-app>`
})
