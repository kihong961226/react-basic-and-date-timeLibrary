import { ReactNode, useState } from "react";

interface Props {
  title: string;
  description: string;
  button: string;
}

export default function Dialog(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          <h1>{props.title}</h1>
          <h5>{props.description}</h5>
          <button onClick={() => setIsOpen(false)}>{props.button}</button>
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "ligthgray",
          }}
        />
      )}
    </>
  );
}
