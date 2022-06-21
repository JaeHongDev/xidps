export default{
  title:"Organism/CallerManager"
}


const Template = (args, { argTypes }) => ({
  components: {
    CallerManager:()=>import('~/components/Organism/CallerManager/CallerManager'),
    VApp:() =>import('vuetify/lib/components/VApp') //VApp

  },
  props: Object.keys(argTypes),
  template: `<v-app><caller-manager ></caller-manager></v-app>`,
});

export const Sample = Template.bind({});
