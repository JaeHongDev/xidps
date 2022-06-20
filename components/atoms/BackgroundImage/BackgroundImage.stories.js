

export default {
  title:"Atoms/Background Image"
}

const Template = (args, { argTypes }) => ({
  components: {
    BackgroundImage: () => import('~/components/atoms/BackgroundImage/BackgroundImage'),
  },
  props: Object.keys(argTypes),
  template: `<background-image></background-image>`
});

export const Deafult =  Template.bind({});
