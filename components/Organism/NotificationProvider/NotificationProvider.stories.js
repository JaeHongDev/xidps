export default{
  title:"Organism/NotificationProvider"
}

const Template = (args,{argsType}) =>({
  components:{
    NotificationProvider:() => import("~/components/Organism/NotificationProvider/NotificationProvider"),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp
  },
  template:`<v-app><notification-provider></notification-provider></v-app>`
})

export const Sample = Template.bind({});

