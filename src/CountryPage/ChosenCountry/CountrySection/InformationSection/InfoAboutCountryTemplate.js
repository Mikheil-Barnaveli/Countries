import React from "react";
import "./InfoAboutCountry.css";

function InfoAboutCountryTemplate(props) {
  return (
    <div id="info-list-div">
      <ul id="info-list">
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Native Name:{" "}
          <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.nativeName}</span>
        </li>
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Population: <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.population}</span>
        </li>
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Region: <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.region}</span>
        </li>
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Sub Region: <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.subRegion}</span>
        </li>
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Capital: <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.capital}</span>
        </li>
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Top Level Domain:{" "}
          <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.topLevelDomain}</span>
        </li>
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Currencies: <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.currencies}</span>
        </li>
        <li
          className="info-list-items"
          style={{ color: props.CountryInfoColor }}
        >
          Languages: <span className="info-list-span" style={{color:props.CountryInfoColor}}>{props.languages}</span>
        </li>
      </ul>
    </div>
  );
}

export default InfoAboutCountryTemplate;
