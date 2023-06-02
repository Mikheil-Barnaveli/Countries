import React from 'react'
import './Card.css'

export default function CardTemplate(props) {


  return (
    <>
    <div id='card-div'>
    <div id='flag-div' style={{backgroundImage: `url(${props.flag})`}}></div>
    <div id='info-div'>
        <h1 id='country-name'>{props.countryName}</h1>
        <div id='detail-info'>
            <h2 className='detail-info'>Population: <span className='props-span'>{props.population}</span></h2>
            <h2 className='detail-info'>Region: <span className='props-span'>{props.region}</span></h2>
            <h2 className='detail-info'>Capital: <span className='props-span'>{props.capital}</span></h2>
        </div>
    </div>
    </div>
    </>
  )
}
