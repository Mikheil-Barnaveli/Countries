import "./App.css";
import { Router, Route, Switch, Routes } from 'react-router-dom';
import Header from "./Header/Header";
import SearchFilter from "./SearchSection/SearchFilter";
import Main from "./Main/Main";
import Country from "./CountryPage/Country";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./utilities/EndPoint";
import MainPage from "./MainPage";
import { MyContext } from "./context/my-context";

function App() {
  const [someInfoFromApi, setSomeInfoFromApi] = useState("");
  const [myData, setData] = useState("");

  
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        console.log(response.data);
        setSomeInfoFromApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (someInfoFromApi === "") return <p>Loading...</p>;

  return (
    <>
      <Routes path='/' element = {<MainPage data={someInfoFromApi}/>}>
        <Route exact path="/" index element={<MainPage data={someInfoFromApi}/>} />
        <Route path="/:country" element={<Country data={someInfoFromApi}/>} />
      </Routes>
    
      {/* <MainPage data={someInfoFromApi}/> */}
      {/* <Country data={someInfoFromApi}/> */}
    </>
  );
}

export default App;
