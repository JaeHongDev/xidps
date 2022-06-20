
export default {
  title:"Organism/Auth"
};
const Template = (args, { argTypes }) => ({
  components: {
    VAuth:()=>import('~/components/Organism/Auth/Auth'),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp
  },
  props: Object.keys(argTypes),
  template: `<v-app><v-auth >${args.label}</v-auth></v-app>`,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  color:'#efefef',
  size:'h1'
};


export const Others = Template.bind({});
Others.args ={
  primary:true,
  label:''
}
