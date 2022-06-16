export default {
  title:"custom Input"
};
export const Default = (props) => {
  console.log(props);
  return `<custom-input>11</custom-input>`;
}

export const Other = () =>`<custom-input>other</custom-input>`;
