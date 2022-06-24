export default{
  title:"atoms/tooltip"
}

const Template = (args,{argsType}) =>({
  component:{
    ToolTip:()=> import("~/components/atoms/ToolTip/ToolTip")
  },
  template:`<tool-tip></tool-tip>`
})

export const Sample = Template.bind({})
