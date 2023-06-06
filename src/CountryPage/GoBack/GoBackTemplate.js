import React from "react";
import "./GoBack.css";

function GoBackTemplate(props) {
  return (
    <div id="go-back-btn-div" style={{ backgroundColor: props.goBackBGC }}>
      <button
        onClick={props.goBack}
        id="go-back-btn"
        style={{ backgroundColor: props.goBackBtnBGC, color:props.goBackBtnColor }}
      >
       &#8592; Go Back
      </button>
    </div>
  );
}

export default GoBackTemplate;
