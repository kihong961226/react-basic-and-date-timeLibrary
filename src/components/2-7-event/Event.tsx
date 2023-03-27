export default function Event() {
  const handleButtonClick = () => {
    console.log("handleButtonClick");
  };
  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };
  const handleClickCaptue2 = () => {
    console.log("handleClickCaptue2");
  };
  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };
  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCaptue2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
}
