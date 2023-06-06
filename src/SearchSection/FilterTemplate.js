import React from "react";
import "./Filter.css";

function FilterTemplate(props) {
  
  // const onOptionChangeHandler = (event) => {
  //       console.log("User Selected Value - ", event.target.value)
  //   }

  return (
    <div id="filter-div">
      <select
        id="filter-select"
        defaultValue={"filter"}
        style={{ backgroundColor: props.FilterBGColor, color:props.FilterColor}}
        onChange={props.onOptionChangeHandler}
      >
        <option value={"all"}>Filter by region</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Americas"}>Americas</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </div>
  );
}

export default FilterTemplate;
