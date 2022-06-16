import Typography from "./Typography.vue";

export default {
  title:"atoms/typography",
  argTypes: {
    text:{
      options:""
    },
    size:{
      options:['h6','h5','h4','h3','h2','h1'],
      control:{type:'select'}
    }
  },
}


const Template = (args, { argTypes }) => ({
  components: {
    VTypography: () => import('~/components/atoms/Typography/Typography'),
  },

  props: Object.keys(argTypes),
  template: `<v-typography size=${args.size}>${args.text}</v-typography>`,
});


//👇 Each story then reuses that template
export const xsmall = Template.bind({});
xsmall.args = {
  text:"Typography",
  size:"xsm"
};

export const small = Template.bind({});
small.args = {
  text:"Typography"
}
