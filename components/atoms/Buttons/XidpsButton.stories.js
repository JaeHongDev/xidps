
export default {
  title:"atoms/buttons",

}
// 👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: {
    VButton: () => import('~/components/atoms/Buttons/XidpsButton'),
    VTypography:() => import('~/components/atoms/Typography/Typography')
  },
  props: Object.keys(argTypes),
  template: `<v-button >${args.label}</v-button>`,
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
