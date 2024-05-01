import { useState } from "react";
import "./TopMenu.css";

//let links = ["Home", "News", "Contact"];

export default function TopMenu(props: { links: string[] }) {
  //hook
  const [selectedLink, setSelectedLink] = useState("");
  return (
    <div className="navbar">
      {props.links.map((link) => (
        <a
          className={link === selectedLink ? "selected" : ""}
          href={"#" + link}
          onClick={() => {
            console.log(link + " cliked");
            setSelectedLink(link);
          }}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
