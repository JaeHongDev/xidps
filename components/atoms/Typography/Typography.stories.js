import Typography from "./Typography.vue";

export default {
  title:"atoms/typography",
  argTypes: {
    text:{
      options:""
    },
    size:{
      options:['fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6', 'fs-7', 'fs-8'] ,
      control:{type:'select'}
    },
    weight:{
      options:['fw-thin',  'fw-extra-light',  'fw-light',  'fw-regular',  'fw-medium',  'fw-semi-bold',  'fw-bold',  'fw-extra-bold',  'fw-heavy'],
      control:{type:'select'}
    }
  },
}


const All = (args,{argTypes}) =>({
  components:
    {
      VTypography: () => import('~/components/atoms/Typography/Typography')
    },
  props:Object.keys(argTypes),
  template:`
    <div>
        <div class="fs-1 ${args.weight}">${args.text}</div>
        <div class="fs-2 ${args.weight}">${args.text}</div>
        <div class="fs-3 ${args.weight}">${args.text}</div>
        <div class="fs-4 ${args.weight}">${args.text}</div>
        <div class="fs-5 ${args.weight}">${args.text}</div>
        <div class="fs-6 ${args.weight}">${args.text}</div>
        <div class="fs-7 ${args.weight}">${args.text}</div>
        <div class="fs-8 ${args.weight}">${args.text}</div>
    </div>
  `
})

const Template = (args, { argTypes }) => ({
  components: {
    VTypography: () => import('~/components/atoms/Typography/Typography'),
  },
  props: Object.keys(argTypes),
  template: `<div><span></span></div>`
});


//👇 Each story then reuses that template
export const sizeAll = All.bind({});
sizeAll.args ={
  text:"Typography",
  size:"fs-1"
}
export const xsmall = Template.bind({});
xsmall.args = {
  text:"Typography",
  size:"xsm",
  weight:""
};

export const small = Template.bind({});
small.args = {
  text:"Typography"
}
