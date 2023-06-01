import React from 'react'
import './Card.css'

export default function CardTemplate(props) {


  return (
    <>
    <div id='card-div'>
    <div id='flag-div' onClick={props.function}></div>
    <div id='info-div'>
        <h1 id='country-name'>{props.countryName}</h1>
        <div id='detail-info'>
            <h2 className='detail-info'>Population:{props.population}</h2>
            <h2 className='detail-info'>Region:{props.region}</h2>
            <h2 className='detail-info'>Capital:{props.capital}</h2>
        </div>
    </div>
    </div>
    </>
  )
}
