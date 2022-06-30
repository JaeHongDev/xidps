export default{
  title:"Organism/Header",
}

const Template = (args,{argsType}) => ({
  components:{
    Header:()=> import("~/components/Organism/Header/Header"),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp
  },
  props:Object.keys(args),
  template:`<v-app><Header v-bind="$props"/></v-app>`
})

export const Sample = Template.bind({});
Sample.args = {
  companyLogo: "https://www.xvote.co.kr/xvote/mng/img/login/logo.png"
}
