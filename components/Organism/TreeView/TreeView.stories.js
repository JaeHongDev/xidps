export default{
  title:"Organism/treeview",
}

const Template = (args,{argsType}) =>({
  components:{
    TreeView:()=> import('~/components/Organism/TreeView/TreeView'),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp

  },
  template:`<v-app><tree-view></tree-view></v-app>`
})

export const Default = Template.bind({});

