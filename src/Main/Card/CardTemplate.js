import React from 'react'
import './Card.css'

export default function CardTemplate(props) {

  // function checkname() {
  //   console.log(props.countryName);
  // }

  return (
    <>
    <div id='card-div' onClick={props.navigateIT}>
    <div id='flag-div' onClick={props.checkname}>
      <img src={props.flag} style={{width:'100%', height:'100%'}}></img>
    </div>
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
