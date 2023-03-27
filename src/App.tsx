import "./App.css";
import ControlledComponent from "./components/2-10-form/ControlledComponent";
import UncontrolledComponent from "./components/2-10-form/UncontrolledComponent";
import Composition from "./components/2-4-props/extraction/Composition";
import Extraction from "./components/2-4-props/extraction/Extraction";
import FunctionalComponent from "./components/2-5-state/FunctionalComponent";
import Event from "./components/2-7-event/Event";
import Component from "./components/3-14-prop-types/Component";
import WelcomeDialog from "./components/3-5-composition/WelcomeDialog";
import Dialog from "./components/3-6-composition/Dialog";
import ThankyouDialog from "./components/3-6-composition/ThankyouDialog";
import Button from "./components/3-7-hoc/Button";
import Input from "./components/3-7-hoc/Input";
import Memo from "./components/3-8-memoization/Memo";
import DatefnsExample from "./components/date-fns/DatefnsExample";
import DayjsExample from "./components/dayjs/DayjsExample";

function App() {
  return (
    <div className="App">
      {/* <Composition />
      <Extraction />
      <FunctionalComponent />
      <Event /> */}
      {/* <ControlledComponent />
      <UncontrolledComponent /> */}
      {/* <ThankyouDialog /> */}
      {/* <Input />
      <br />
      <Button /> */}
      {/* <Memo /> */}
      {/* <Component /> */}
      {/* <DayjsExample /> */}
      <DatefnsExample />
    </div>
  );
}

export default App;
