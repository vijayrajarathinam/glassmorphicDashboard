import { Content } from "./component/commons/content";
import { SideBar } from "./component/commons/sidebar";
import { RightSide } from "./component/commons/rightside";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="glassLayer">
        <SideBar />
        <Content />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
