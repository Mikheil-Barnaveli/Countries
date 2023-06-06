import React from 'react'
import './Card.css'

export default function CardTemplate(props) {

  // function checkname() {
  //   console.log(props.countryName);
  // }

  return (
    <>
    <div id='card-div' onClick={props.navigateIT} style={{backgroundColor:props.BGcolor}}>
    <div id='flag-div' onClick={props.checkname}>
      <img src={props.flag} style={{width:'100%', height:'100%'}}></img>
    </div>
    <div id='info-div'>
        <h1 id='country-name' style={{color:props.infoColor}}>{props.countryName}</h1>
        <div id='detail-info'>
            <h2 className='detail-info' style={{color:props.infoColor}}>Population: <span className='props-span' style={{color:props.infoColor}}>{props.population}</span></h2>
            <h2 className='detail-info' style={{color:props.infoColor}}>Region: <span className='props-span' style={{color:props.infoColor}}>{props.region}</span></h2>
            <h2 className='detail-info' style={{color:props.infoColor}}>Capital: <span className='props-span' style={{color:props.infoColor}}>{props.capital}</span></h2>
        </div>
    </div>
    </div>
    </>
  )
}
