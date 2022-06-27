export default{
  title:"Molecule/UserProfile"
}

const Template = (args,{argsType}) =>({
    components:{
      UserProfile:()=>import("~/components/Molecule/UserProfile/UserProfile"),
      VApp:() =>import('vuetify/lib/components/VApp') //VApp
    },
    props:Object.keys(args),
    template:`<v-app><user-profile :message="$props.message" :notification="$props.notification"  :username="$props.username" :companyName="$props.companyName" :avatar="$props.avatar"></user-profile></v-app>`
  }
)

export const Default = Template.bind({});
Default.args = {
  message:{
    LMS:0,
    MMS:0,
    SMS:0,
    PUSH:1000
  },
  notification:{
    count:0
  },
  username:"",
  companyName:"",
  avatar:"https://cdn.vuetifyjs.com/images/john.jpg",
}
