
export default{
  title:"Molecule/RadioButton",
  argTypes: {
    list:{
    },
  },
}

const Template = (args,{argTypes})=>({
  components:{
    RadioButton:()=>import('~/components/Molecule/RadioButton/RadioButton')
  },
  props: Object.keys(argTypes),
  template: `<radio-button v-bind="$props"></radio-button>`
})

export const Default = Template.bind({});
Default.args = {
  lists: [
    {text: "ㄱ"},
    {text: "ㄴ"},
    {text: "ㄷ"},
    {text: "ㄹ"},
    {text: "ㅁ"},
    {text: "ㅂ"},
    {text: "ㅅ"},
    {text: "ㅇ"},
    {text: "ㅈ"},
    {text: "ㅊ"},
    {text: "ㅋ"},
    {text: "ㅌ"},
    {text: "ㅍ"},
    {text: "ㅎ"}
  ],
  selectedIndex: -1

}
