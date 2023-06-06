import React from "react";
import GoBackTemplate from "./GoBackTemplate";

function GoBack(props) {
  return (
    <GoBackTemplate
      goBack={props.goBack}
      goBackBGC={props.goBackBGC}
      goBackBtnBGC={props.goBackBtnBGC}
      goBackBtnColor={props.goBackBtnColor}
    />
  );
}

export default GoBack;
