import React from 'react'
import './InfoAboutCountry.css'

function InfoAboutCountryTemplate(props) {
  return (
    <div id='info-list-div'>
        <ul id='info-list'>
        <li className='info-list-items'>Native Name: <span className='info-list-span'>{props.nativeName}</span></li>
        <li className='info-list-items'>Population: <span className='info-list-span'>{props.population}</span></li>
        <li className='info-list-items'>Region: <span className='info-list-span'>{props.region}</span></li>
        <li className='info-list-items'>Sub Region: <span className='info-list-span'>{props.subRegion}</span></li>
        <li className='info-list-items'>Capital: <span className='info-list-span'>{props.capital}</span></li>
        <li className='info-list-items'>Top Level Domain: <span className='info-list-span'>{props.topLevelDomain}</span></li>
        <li className='info-list-items'>Currencies: <span className='info-list-span'>{props.currencies}</span></li>
        <li className='info-list-items'>Languages: <span className='info-list-span'>{props.languages}</span></li>
        </ul>
    </div>
  )
}

export default InfoAboutCountryTemplate