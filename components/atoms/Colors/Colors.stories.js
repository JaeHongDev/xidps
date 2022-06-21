

export default{
  title:"atoms/colors",

  argTypes:{
    colors:{
      options:["brown-grey", "pink-red", "brown-grey", "pale-grey", "warm-grey", "twilight-blue", "light-navy-blue", "rich-blue", "blueberry", "slate-grey", "dark-blue-grey", "warm-grey-two", "blueberry-two", "white", "aqua-blue"],
      control:"select"
    }
  }
}

const Template = (args,{argsType}) =>({
  props:Object.keys(args),
  components:{
    VColor:()=> import("~/components/atoms/Colors/Color")
  },
  template:`<v-color color="${args.colors}"></v-color>`
})

export const sample = Template.bind({});

const All = (args,{argsType}) =>({
  props:Object.keys(args),
  components:{
    VColor:()=> import("~/components/atoms/Colors/Color")
  },
  template:`<div style="display:flex;flex-wrap:wrap; padding:5px;">
  <v-color color ="brown-grey"></v-color>
  <v-color color ="pink-red"></v-color>
  <v-color color ="brown-grey"></v-color>
  <v-color color ="pale-grey"></v-color>
  <v-color color ="warm-grey"></v-color>
  <v-color color ="twilight-blue"></v-color>
  <v-color color ="light-navy-blue"></v-color>
  <v-color color ="rich-blue"></v-color>
  <v-color color ="blueberry"></v-color>
  <v-color color ="slate-grey"></v-color>
  <v-color color ="dark-blue-grey"></v-color>
  <v-color color ="warm-grey-two"></v-color>
  <v-color color ="blueberry-two"></v-color>
  <v-color color ="white"></v-color>
  <v-color color ="aqua-blue"></v-color>
  </div>`
})
export const all = All.bind({});














