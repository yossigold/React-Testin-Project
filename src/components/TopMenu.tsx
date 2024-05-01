import { useState } from "react";
import "./TopMenu.css";

//let links = ["Home", "News", "Contact"];

export default function TopMenu(props: {
  links: string[];
  selectedIndex: number;
  HandelOnClick: Function;
}) {
  //hook
  //const [selectedLink, setSelectedLink] = useState("");
  return (
    <div className="navbar">
      {props.links.map((link, index) => (
        <a
          className={index === props.selectedIndex ? "selected" : ""}
          href={"#" + link}
          onClick={() => {
            console.log(link + " cliked");
            props.HandelOnClick(index);
          }}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
