export default{
  title:"Organism/SideBar"
}

const Template = (args,{argsType}) =>({
  components:{
    SideBar:()=> import("~/components/Organism/SideBar/SideBar"),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp
  },
  template:`<v-app><side-bar></side-bar></v-app>`
})

export const Sample = Template.bind({});
