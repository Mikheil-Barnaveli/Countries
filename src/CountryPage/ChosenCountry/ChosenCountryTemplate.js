import React from 'react'
import Flag from './CountrySection/Flag'
import NameOfCountry from './CountrySection/InformationSection/NameOfCountry'
import InfoAboutCountry from './CountrySection/InformationSection/InfoAboutCountry'
import BorderCountries from './CountrySection/InformationSection/BorderCountries'
import './ChosenCountry.css'

function ChosenCountryTemplate() {
  return (
    <div id='chosen-country-div'>
    <Flag/>
    <div id='detailed-info-about-countries-div'>
    <NameOfCountry/>
    <InfoAboutCountry/>
    <BorderCountries/>
    </div>
    </div>
  )
}

export default ChosenCountryTemplate