export default{
  title:"Organism/NotificationProvider"
}

const Template = (args,{argsType}) =>({
  components:{
    NotificationProvider:() => import("~/components/Organism/NotificationProvider/NotificationProvider"),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp
  },
  props:Object.keys(args),
  template:`<v-app><notification-provider v-bind="$props"></notification-provider></v-app>`
})

export const Default = Template.bind({});
export const Sample = Template.bind({});

Sample.args = {
  notification:{
    warn:"warnning Message",
    notice:[
      {id:1, value:"notice Message"}
    ]
  }
}
