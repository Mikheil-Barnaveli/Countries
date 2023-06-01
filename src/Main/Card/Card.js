import React, { useEffect, useState } from 'react';
import CardTemplate from './CardTemplate';
import axios from 'axios';
import { BASE_URL } from '../../utilities/EndPoint';


function Card() {
  const [someInfoAboutFromApi, setSomeInfoAboutFromApi] = useState("");

  useEffect(() => {
    axios.get(BASE_URL)
      .then(response => {
        console.log(response.data);
        setSomeInfoAboutFromApi(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
    <>
    <CardTemplate countryName = {someInfoAboutFromApi.name.common}/>
    </>
  );
}

export default Card;
