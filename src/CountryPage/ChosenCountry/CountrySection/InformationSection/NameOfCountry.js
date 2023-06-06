import React from 'react'

function NameOfCountry(props) {
  return (
    <div style={{fontWeight:"800", fontSize:"2rem", color:props.CountryInfoColor}}>{props.countryName}</div>
  )
}

export default NameOfCountry