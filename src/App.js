import "./App.css";
import { Router, Route, Switch, Routes, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import SearchFilter from "./SearchSection/SearchFilter";
import Main from "./Main/Main";
import Country from "./CountryPage/Country";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./utilities/EndPoint";
import MainPage from "./MainPage";
// import { MyContext } from "./context/my-context";

function App() {
  const [someInfoFromApi, setSomeInfoFromApi] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [checkDarkMode, setCheckDarkMode] = useState(false);
  const [infoColor, setInfoColor] = useState("");
  const [mainBGColor, setMainBGColor] = useState("");
  const [darkLight, setDarkLight] = useState("Dark")
  const [headerBoxShadow, setHeaderBoxShadow] = useState("0px 2px 4px rgba(0, 0, 0, 0.0562443)")
  const [selectedOption, setSelectedOption] = useState('all');
  const [filteredData, setFilteredData] = useState([]);
  let navigate = useNavigate()

  function handleDarkMode() {
    let darkMode = !checkDarkMode
    if (darkMode ) {
      setBgColor("#2B3844");
      setInfoColor("#FFFFFF");
      setMainBGColor("#202C36");
      setDarkLight("Light")
      setHeaderBoxShadow("0px 2px 4px rgba(0, 0, 0, 0.0562443)")
      setCheckDarkMode(darkMode);
    } else {
      setBgColor("#FFFFFF");
      setInfoColor("#111517");
      setMainBGColor("#FEFEFE");
      setDarkLight("Dark")
      setHeaderBoxShadow("0px 2px 4px rgba(0, 0, 0, 0.0562443)")
      setCheckDarkMode(darkMode);
    }
  }


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

  
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value)
    setSelectedOption(event.target.value)
  }

  function handleLogoClick() {
    navigate(`/Countries`)
    setSelectedOption("all")
    
  }


  return (
    <>
      <Header
        darkMode={handleDarkMode}
        logoClick={handleLogoClick}
        BGColor={bgColor}
        infoColor={infoColor}
        darklight={darkLight}
        headerBoxShadow={headerBoxShadow}
      />
      <Routes path="/Countries" element={<MainPage data={someInfoFromApi} />}>
        <Route
          exact
          path="/Countries"
          index
          element={
            <MainPage
              data={someInfoFromApi}
              BGcolor={bgColor}
              infoColor={infoColor}
              mainBGColor={mainBGColor}
              searchBGColor={bgColor}
              searchColor={infoColor}
              searchMainColor={mainBGColor}
              FilterBGColor={bgColor}
              FilterColor={infoColor}
              onOptionChangeHandler={onOptionChangeHandler}
              selectedRegion = {selectedOption}
            />
          }
        />
        <Route
          path="/:country"
          element={
            <Country
              data={someInfoFromApi}
              goBackBGC={mainBGColor}
              goBackBtnBGC={bgColor}
              goBackBtnColor={infoColor}
              CountryInfoColor={infoColor}
              ChosenCountryBGC={mainBGColor}
              BorderCountriesBG={mainBGColor}
              BorderCountriesC={infoColor}
              borderCountryBtnBGC={bgColor}
            />
          }
        />
      </Routes>

      {/* <MainPage data={someInfoFromApi}/> */}
      {/* <Country data={someInfoFromApi}/> */}
    </>
  );
}

export default App;
