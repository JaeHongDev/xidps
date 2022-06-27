
export default{
  title:"test/MenuContainer"
}

const Template = (args,{argsType}) =>({
  component:{
    MenuContainer:()=> import("~/components/Test/MenuContainer/MenuContainer" )
  },
  template:`<menu-container></menu-container>`
})

export const Sample = Template.bind({});

