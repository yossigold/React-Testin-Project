import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/*import "bootstrap/dist/css/bootstrap.css";*/

import TopMenu from "./components/TopMenu";
import Content from "./components/Content";

function App() {
  const links = [
    { key: "Home", body: "Home text goes here" },
    { key: "News", body: "News text goes here" },
    { key: "Contact", body: "Contact text goes here" },
  ];
  const body = [
    "Home text goes here",
    "News text goes here",
    "Contact text goes here",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <div>
        <TopMenu
          links={links}
          selectedIndex={selectedIndex}
          handelOnClick={setSelectedIndex}
        ></TopMenu>
      </div>
      <div className="card">
        <Content
          head={links[selectedIndex].key}
          body={links[selectedIndex].body}
        ></Content>
      </div>

      <div>fotter</div>
    </>
  );
}

export default App;
