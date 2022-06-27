export default {
  title:"Molecule/MenuList"
}

const Template = (args,{argsType}) =>({
  components:{
    MenuList:()=> import("~/components/Molecule/MenuList/MenuList")
  },
  template: `<menu-list></menu-list>`
})

export const Sample = Template.bind({});
