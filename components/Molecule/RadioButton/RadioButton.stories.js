
export default{
  title:"Molecule/RadioButton",
  argTypes: {
    list:[],
  },
}

const Template = (args,{argTypes})=>({
  components:{
    RadioButton:()=>import('~/components/Molecule/RadioButton/RadioButton')
  },
  props: Object.keys(args),
  template: `<radio-button v-bind="$props"></radio-button>`
})

export const Default = Template.bind({});
Default.args = {
  lists: ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",],

}
