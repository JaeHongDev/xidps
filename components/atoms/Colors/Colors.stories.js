export default {
  title: "atoms/colors",

  argTypes: {
    colors: {
      options: ["bg-dark-indigo", "bg-dark-blue-grey", "bg-cornflower", "bg-pale-lilac", "bg-pale-grey", "bg-warm-grey", "bg-light-gray", "bg-lavender", "bg-sun-yellow", "bg-soft-green", "bg-salmon", "bg-white", "bg-light-navy-blue", "bg-black-opacity"],
      control: "select"
    }
  }
}


const Template = (args, {argsType}) => ({
  props: Object.keys(args),
  components: {
    VColor: () => import("~/components/atoms/Colors/Color")
  },
  template: `
    <v-color :color="${args.colors}"></v-color>`
})

export const sample = Template.bind({});

const All = (args, {argsType}) => ({
  props: Object.keys(args),
  components: {
    VColor: () => import("~/components/atoms/Colors/Color")
  },
  template: `
    <div style="display:flex;flex-wrap:wrap; padding:5px;">
    <v-color color="bg-dark-indigo"></v-color>
    <v-color color="bg-dark-blue-grey"></v-color>
    <v-color color="bg-cornflower"></v-color>
    <v-color color="bg-pale-lilac"></v-color>
    <v-color color="bg-pale-grey"></v-color>
    <v-color color="bg-warm-grey"></v-color>
    <v-color color="bg-light-gray"></v-color>
    <v-color color="bg-lavender"></v-color>
    <v-color color="bg-sun-yellow"></v-color>
    <v-color color="bg-soft-green"></v-color>
    <v-color color="bg-salmon"></v-color>
    <v-color color="bg-white"></v-color>
    <v-color color="bg-light-navy-blue"></v-color>
    <v-color color="bg-black-opacity"></v-color>

    </div>`
})
export const all = All.bind({});














