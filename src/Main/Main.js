import React from "react";
import "./Main.css";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";

function Main(props) {
  let navigate = useNavigate()
  
  return (
    <div id="main-div" style={{backgroundColor:props.mainBGColor}}> 
      {props.data.map((el, key) => {
        return (
          <Card
            key={el.name.common}
            countryName={el.name.common}
            flag={el.flags.png}
            population={el.population}
            region={el.region}
            capital={el.capital}
            BGcolor = {props.BGcolor}
            infoColor = {props.infoColor}
            checkname = {function checkname() {
              console.log(el.name.common)
            } }
            navigateIT = {() => navigate(`/${el.cca3}`)}
          />
        );
      })}
    </div>
  );
}

export default Main;
