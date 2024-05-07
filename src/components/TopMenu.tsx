import { useState } from "react";
import "./TopMenu.css";

//let links = ["Home", "News", "Contact"];
export default function TopMenu(props: {
  links: { key: string; body: string }[];
  selectedIndex: number;
  handelOnClick: Function;
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
            console.log(link.key + " cliked");
            props.handelOnClick(index);
          }}
        >
          {link.key}
        </a>
      ))}
    </div>
  );
}
