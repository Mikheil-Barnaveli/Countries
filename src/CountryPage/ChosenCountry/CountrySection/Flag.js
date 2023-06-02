import React from 'react'
import './Flag.css'

function Flag(props) {
  return (
    <div id='info-flag-div'><img src={props.flag} style={{width:'100%', height:'100%'}}></img></div>
  )
}

export default Flag