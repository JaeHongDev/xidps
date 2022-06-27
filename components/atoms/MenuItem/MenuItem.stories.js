export default{
  title:"Atoms/MenuItem",
  argTypes: {
    selected: {
    }
  }
}

const Template = (args,{argsType }) =>({
  components:{
    MenuItem:() => import("~/components/atoms/MenuItem/MenuItem")
  },
  props: Object.keys(args),
  template: `<menu-item :selected="$props.selected" :icon="$props.icon" :menuName="$props.menuName"></menu-item>`
})
export const selectedMenuItem = Template.bind({});
selectedMenuItem.args  = {
  selected:true,
  menuName:"",
  icon:"mdi-home"
}
export const DefaultMenuItem = Template.bind({});
DefaultMenuItem.args = {
  selected:false,
  menuName:"",
  icon:"mdi-home"
}




