import React from 'react'
import './BorderCountries.css'

function BorderCountriesTemplate(props) {
  return (
    <div id='border-countries-div' style={{backgroundColor:props.BorderCountriesBG}}>
        <h2 style={{color:props.BorderCountriesC}}>Border Countries:<div id='border-props-div' style={{backgroundColor:props.BorderCountriesBG}}>{props.borders}</div></h2>
        
    </div>
  )
}

export default BorderCountriesTemplate