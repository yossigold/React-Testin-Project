import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TopMenu from "./components/TopMenu";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TopMenu></TopMenu>
      </div>
      <div className="card">
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
