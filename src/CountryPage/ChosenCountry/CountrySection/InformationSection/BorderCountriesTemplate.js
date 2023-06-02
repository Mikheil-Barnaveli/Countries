import React from 'react'
import './BorderCountries.css'

function BorderCountriesTemplate(props) {
  return (
    <div id='border-countries-div'>
        <h2>Border Countries:<div id='border-props-div'>{props.borders}</div></h2>
        
    </div>
  )
}

export default BorderCountriesTemplate