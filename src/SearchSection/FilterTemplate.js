import React from "react";
import "./Filter.css";

function FilterTemplate() {

  const gapStyle = {
    backgroundColor: 'white',
    height: '1px',
    padding: '0',
    margin: '5px 0',
  };


  return (
    <div id="filter-div">
      <select id="filter-select" defaultValue={"Filter by region"}>
      <option value="filter" disabled hidden>Filter by region</option>
        <option value={"Africa"}>Africa</option>
        <option value={"America"}>America</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </div>
  );
}

export default FilterTemplate;
