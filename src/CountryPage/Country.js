import React from "react";
import Header from "../Header/Header";
import GoBack from "./GoBack/GoBack";
import ChosenCountry from "./ChosenCountry/ChosenCountry";

function Country(props) {
  const values = Object.values(props.data[21].name.nativeName)[0].official;
  console.log(values);
  return (
    <>
      <Header />
      <GoBack />
      {props.data.map((el, key) => {
        return (
          <ChosenCountry
            key={el.name.common}
            countryName={el.name.common}
            flag={el.flags.png}
            population={el.population}
            region={el.region}
            capital={el.capital}
            subRegion={el.subregion}
            topLevelDomain={el.tld}
            currencies={
              el?.currencies
                ? Object.values(el.currencies)[0].name
                : "Not Available"
            }
            languages={
              el?.languages
                ? Object.values(el.languages).map((lang) => `${lang} `)
                : "Not Available"
            }
            nativeName={
              el?.currencies
                ? Object.values(el.name.nativeName)[0].official
                : "Not Available"
            }
            borders={
              el?.borders
                ? Object.values(el.borders).map((lang) => (
                    <button
                      style={{
                        background: "none",
                        boxshadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.104931)",
                        borderradius: "2px",
                        padding:"2px",
                        textAlign:"center"
                      }}
                    >
                      {lang}
                    </button>
                  ))
                : <span style={{fontWeight:'300', fontSize:'1rem'}}>Not Available</span>
            }
          />
        );
      })}
    </>
  );
}

export default Country;
