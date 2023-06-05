import React, { useContext } from "react";
import Header from "../Header/Header";
import GoBack from "./GoBack/GoBack";
import ChosenCountry from "./ChosenCountry/ChosenCountry";
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { MyContext } from '../context/my-context';

function Country(props) {
  // const values = Object.values(props.data[21].name.nativeName)[0].official;
  // console.log(values);

  const params =useParams()
  let navigate = useNavigate()


  console.log(params, "es aris paramsi");

    
    console.log(props.data, "es aris propsi");

    const element = props.data.find((el)=>{
        return el.cca3 === params.country 
    })

    console.log(element, "es aris elementi");

  return (
    <>
      <Header />
      <GoBack goBack = {() => navigate('/')}/>
          <ChosenCountry
            key={element.name.common}
            countryName={element.name.common}
            flag={element.flags.png}
            population={element.population}
            region={element.region}
            capital={element.capital}
            subRegion={element.subregion}
            topLevelDomain={element.tld}
            currencies={
              element?.currencies
                ? Object.values(element.currencies)[0].name
                : "Not Available"
            }
            languages={
              element?.languages
                ? Object.values(element.languages).map((lang) => `${lang} `)
                : "Not Available"
            }
            nativeName={
              element?.currencies
                ? Object.values(element.name.nativeName)[0].official
                : "Not Available"
            }
            borders={
              element?.borders
                ? Object.values(element.borders).map((lang, index) => (
                    <button key={index}
                      style={{
                        background: "none",
                        boxshadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.104931)",
                        borderradius: "2px",
                        padding:"2px",
                        textAlign:"center"
                      }}
                      onClick={() => navigate(`/${lang}`)}
                    >
                      {lang}
                    </button>
                  ))
                : <span style={{fontWeight:'300', fontSize:'1rem'}}>Not Available</span>
            }
          />
      
    </>
  );
}

export default Country;
