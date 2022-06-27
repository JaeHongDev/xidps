export default{
  title:"Organism/treeview",
}

const Template = (args,{argsType}) =>({
  components:{
    TreeView:()=> import('~/components/Organism/TreeView/TreeView')
  },
  template:`<tree-view></tree-view>`
})

export const Default = Template.bind({});

