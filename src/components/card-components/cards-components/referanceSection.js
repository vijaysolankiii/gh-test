import React from "react";

function ReferanceSection(props) {
  return (
    <div className="neumorphism-effect__btn referance-data">
      <div className="refCode">
        <span>RefCode</span> : {props.refCode}
      </div>
      <div className="refBy">
        <span>RefBy</span> : {props.refBy}
      </div>
    </div>
  );
}

export default ReferanceSection;
