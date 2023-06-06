import React from "react";
import Header from "./Header/Header";
import SearchFilter from "./SearchSection/SearchFilter";
import Main from "./Main/Main";

function MainPage(props) {
  return (
    <>
      {/* <Header/> */}
      <SearchFilter
        data={props.data}
        searchBGColor={props.searchBGColor}
        searchColor={props.searchColor}
        searchMainColor={props.searchMainColor}
      />
      <Main
        data={props.data}
        BGcolor={props.BGcolor}
        infoColor={props.infoColor}
        mainBGColor={props.mainBGColor}
      />
    </>
  );
}

export default MainPage;
