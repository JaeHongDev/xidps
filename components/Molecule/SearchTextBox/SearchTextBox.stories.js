export default{
  title:"Molecule/SearchTextBox"
}

const Template = (args,{argsType}) =>({
  components:{
    SearchTextBox:()=> import("~/components/Molecule/SearchTextBox/SearchTextBox"),
    VApp:()=> import("vuetify/lib/components/VApp")
  },

  template:`<v-app><search-text-box></search-text-box></v-app>`
})

export const Sample = Template.bind({});
