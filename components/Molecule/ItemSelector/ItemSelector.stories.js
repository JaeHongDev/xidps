

export default {
  title:'Molecule/ItemSelector'
};

const Template = (args,{argsType}) =>({
  components:{
    ItemSelector:()=> import("~/components/Molecule/ItemSelector/ItemSelector"),
    VApp:()=> import("vuetify/lib/components/VApp")
  },
  template:`<v-app><item-selector></item-selector></v-app>`
})

export const Sample = Template.bind({});
