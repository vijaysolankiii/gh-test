import React from "react";
import Image from "./image";

function CardButton(props) {
  return (
    <div className={`w-100 ${props.buttonParentClass}`}>
      <a
        href={props.buttonLink}
        className="neumorphism-effect__btn item-center"
        rel="noopener noreferrer"
      >
        <Image filename={props.buttonImg} className={props.buttonClass} alt={props.buttonAltText}/>
        {props.buttonText}
      </a>
    </div>
  );
}

export default CardButton;
