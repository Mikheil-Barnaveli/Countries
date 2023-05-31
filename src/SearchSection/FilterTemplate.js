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
      <select id="filter-select">
      <option value="" disabled selected hidden>Filter by region</option>
      <option disabled style={gapStyle}></option>
        <option>Africa</option>
        <option disabled style={gapStyle}></option>
        <option>America</option>
        <option disabled style={gapStyle}></option>
        <option>Asia</option>
        <option disabled style={gapStyle}></option>
        <option>Europe</option>
        <option disabled style={gapStyle}></option>
        <option>Oceania</option>
        <option disabled style={gapStyle}></option>
      </select>
    </div>
  );
}

export default FilterTemplate;
