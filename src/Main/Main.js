import React from "react";
import "./Main.css";
import Card from "./Card/Card";

function Main(props) {
  return (
    <div id="main-div">
      {props.data.map((el, key) => {
        return (
          <Card
            key={el.name.common}
            countryName={el.name.common}
            flag={el.flags.png}
            population={el.population}
            region={el.region}
            capital={el.capital}
          />
        );
      })}
    </div>
  );
}

export default Main;
