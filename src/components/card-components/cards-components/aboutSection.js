import React from "react";
import CardHeadingInfo from "./cardHeadingInfo";

function AboutSection(props) {
  return (
    <div className="about-me w-100">
      <CardHeadingInfo image="about-me.png" text="about me" />
      <div className="neumorphism-effect__btn">
        <div id="card-aboutUser">{props.aboutUser} </div>
      </div>
    </div>
  );
}

export default AboutSection;
