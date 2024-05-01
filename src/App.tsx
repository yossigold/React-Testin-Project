import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/*import "bootstrap/dist/css/bootstrap.css";*/

import TopMenu from "./components/TopMenu";
import Content from "./components/Content";

function App() {
  const links = ["Home", "News", "Contact"];

  return (
    <>
      <div>
        <TopMenu links={links}></TopMenu>
      </div>
      <div className="card">
        <Content head="Contact" body="aaaa"></Content>
      </div>

      <div>fotter</div>
    </>
  );
}

export default App;
