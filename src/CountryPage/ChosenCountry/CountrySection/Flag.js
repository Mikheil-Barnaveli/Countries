import React from 'react'
import './Flag.css'

function Flag(props) {
  return (
    <div id='info-flag-div' style={{backgroundImage:`url(${props.flag})`}}></div>
  )
}

export default Flag