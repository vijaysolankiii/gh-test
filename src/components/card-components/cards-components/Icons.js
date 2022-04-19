import React from "react";
import "../../../assets/style.css";
import Image from "./image";

function Icons(props) {
  return (
    <li className={`sm-icon ${props.iconName}`}>
      <a href={props.link} className={`neumorphism-effect__btn item-center  general-icon ${props.iconName}_icon`} target="_blank" rel="noopener noreferrer" >
        <Image filename={props.imageIcon}/>
        <span className="text-capital">{props.iconName}</span>
      </a>
    </li>
  );
}

export default Icons;