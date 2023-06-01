import React from 'react'

function BorderCountriesTemplate(props) {
  return (
    <div>
        <h2>Border Countries:</h2>
        <button onClick={props.BorderCountriesBtn}>{props.CountryName}</button>
    </div>
  )
}

export default BorderCountriesTemplate