import { ComponentProps } from "react";
import withLoading from "./WithLoading";

function Button(props: ComponentProps<"button">) {
  return <button {...props}>Button</button>;
}

export default withLoading(Button);
