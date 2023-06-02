import React from 'react'
import Flag from './CountrySection/Flag'
import NameOfCountry from './CountrySection/InformationSection/NameOfCountry'
import InfoAboutCountry from './CountrySection/InformationSection/InfoAboutCountry'
import BorderCountries from './CountrySection/InformationSection/BorderCountries'
import './ChosenCountry.css'

function ChosenCountryTemplate(props) {
  return (
    <div id='chosen-country-div'>
    <Flag {...props}/>
    <div id='detailed-info-about-countries-div'>
    <NameOfCountry {...props}/>
    <InfoAboutCountry {...props}/>
    <BorderCountries {...props}/>
    </div>
    </div>
  )
}

export default ChosenCountryTemplate