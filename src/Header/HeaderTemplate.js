import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function HeaderTemplate(props) {
  let navigate = useNavigate()
  return (
    <header
      id="main-header"
      style={{
        backgroundColor: props.BGColor,
        boxShadow: props.headerBoxShadow,
      }}
    >
      <h1 id="logo" style={{ color: props.infoColor }}  onClick={props.logoClick}>
        Where In The World?
      </h1>
      <button
        id="dark-mode-btn"
        onClick={props.darkMode}
        style={{ color: props.infoColor }}
      >
        {props.darklight} Mode
      </button>
    </header>
  );
}

export default HeaderTemplate;
