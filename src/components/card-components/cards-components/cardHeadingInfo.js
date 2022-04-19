import React from "react";
import Image from "./image";

function CardHeadingInfo(props) {
  return (
    <>
      <h2 className="hero-text d-flex text-capital">
        <Image className="headText_img" alt="icon" filename={props.image}/>
        <span>{props.text}</span>
      </h2>
    </>
  );
}

export default CardHeadingInfo;
