import React from 'react'
import ChosenCountryTemplate from './ChosenCountryTemplate'

function ChosenCountry(props) {
  return (
    <ChosenCountryTemplate {...props} ChosenCountryBGC={props.ChosenCountryBGC}/>
  )
}

export default ChosenCountry