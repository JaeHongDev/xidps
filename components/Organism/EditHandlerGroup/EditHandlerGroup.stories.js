export default{
  title:"Organism/EditHandlerGorup"
}

const Template = (args , {argsType}) =>({
  components:{
    EditHandlerGroup:()=> import("~/components/Organism/EditHandlerGroup/EditHandlerGroup"),
    VApp:() => import("vuetify/lib/components/VApp")
  },
  props:Object.keys(args),
  template:`<v-app><edit-handler-group></edit-handler-group></v-app>`
})

export const Sample = Template.bind({});
