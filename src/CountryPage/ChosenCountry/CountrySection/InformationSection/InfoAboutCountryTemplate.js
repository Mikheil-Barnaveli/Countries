import React from 'react'

function InfoAboutCountryTemplate(props) {
  return (
    <div id='info-list-div'>
        <ul id='info-list'>
        <li>Native Name: {props.NativeName}</li>
        <li>Population: {props.Population}</li>
        <li>Region: {props.Region}</li>
        <li>Sub Region: {props.SubRegion}</li>
        <li>Capital: {props.Capital}</li>
        <li>Top Level Domain: {props.TopLevelDomain}</li>
        <li>Currencies: {props.Currencies}</li>
        <li>Languages: {props.Languages}</li>
        </ul>
    </div>
  )
}

export default InfoAboutCountryTemplate