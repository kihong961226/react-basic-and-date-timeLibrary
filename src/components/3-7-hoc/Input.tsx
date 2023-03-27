import withLoading from "./WithLoading";

const Input = () => {
  return <input defaultValue="Input" />;
};

export default withLoading(Input);

// export default withLoading(function Input() {
//   return <input defaultValue={"Input"} />;
// });
