import Dialog from "./Dialog";

interface Props {
  title: string;
  description: string;
}

export default function CustomDialog(props: Props) {
  return (
    <Dialog>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </Dialog>
  );
}
