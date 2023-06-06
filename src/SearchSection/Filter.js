import React from "react";
import FilterTemplate from "./FilterTemplate";

function Filter(props) {
  return (
    <FilterTemplate
      FilterBGColor={props.FilterBGColor}
      FilterColor={props.FilterColor}
      onOptionChangeHandler={props.onOptionChangeHandler}
    />
  );
}

export default Filter;
