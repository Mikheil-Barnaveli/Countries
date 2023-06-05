import React from 'react'
import Header from "./Header/Header";
import SearchFilter from "./SearchSection/SearchFilter";
import Main from "./Main/Main";

function MainPage(props) {
  return (
    <>
    <Header/>
    <SearchFilter data = {props.data}/>
    <Main data = {props.data}/>
    </>
  )
}

export default MainPage