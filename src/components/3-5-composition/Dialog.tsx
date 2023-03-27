import { Children, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function Dialog(props: Props) {
  return <div style={{ backgroundColor: "pink" }}>{props.children}</div>;
}
