import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/*import "bootstrap/dist/css/bootstrap.css";*/

import TopMenu from "./components/TopMenu";
import Content from "./components/Content";

function App() {
  const links = ["Home", "News", "Contact"];
  const body = [
    "Home text goes here",
    "News text goes here",
    "Contact text goes here",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <div>
        <TopMenu
          links={links}
          selectedIndex={selectedIndex}
          HandelOnClick={setSelectedIndex}
        ></TopMenu>
      </div>
      <div className="card">
        <Content
          head={links[selectedIndex]}
          body={body[selectedIndex]}
        ></Content>
      </div>

      <div>fotter</div>
    </>
  );
}

export default App;
