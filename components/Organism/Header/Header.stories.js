export default{
  title:"Organism/Header",
}

const Template = (args,{argsType}) => ({
  components:{
    Header:()=> import("~/components/Organism/Header/Header"),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp
  },
  template:`<v-app><Header/></v-app>`
})

export const Sample = Template.bind({});
