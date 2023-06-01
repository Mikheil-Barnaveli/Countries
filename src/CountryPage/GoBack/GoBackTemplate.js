import React from 'react'
import './GoBack.css'

function GoBackTemplate(props) {
  return (
    <div id='go-back-btn-div'>
    <button onClick={props.goBack} id='go-back-btn'>Go Back</button>
    </div>
  )
}

export default GoBackTemplate