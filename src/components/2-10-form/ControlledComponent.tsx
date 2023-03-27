import React, { useState } from "react";

export default function ControlledComponent() {
  const [value, setValue] = useState("");
  const [essay, setEssay] = useState("please 어쩌고 저쩌고 자짜고");
  // Component Props
  // const handleChange2: ComponentProps<"input">["onChange"] = (event) => {

  // };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  function handleEssayChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEssay(event.target.value);
  }

  // const handleSubmit2 : ComponentProps<"form">["onSubmit"] = (event) => {};

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert(`name: ${name}, essay: ${essay}`);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <br />
        <label>
          Essay:
          <textarea value={essay} onChange={handleEssayChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
