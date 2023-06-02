import "./App.css";
import Header from "./Header/Header";
import SearchFilter from "./SearchSection/SearchFilter";
import Main from "./Main/Main";
import Country from "./CountryPage/Country";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./utilities/EndPoint";

function App() {
  const [someInfoFromApi, setSomeInfoFromApi] = useState("");

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
      {/* <Header />
      <SearchFilter />
      <Main
        data={someInfoFromApi}
      /> */}
      <Country data={someInfoFromApi}/>
    </>
  );
}

export default App;
