import React from 'react'
import './Header.css'

function HeaderTemplate(props) {
  return (
    <header  id='main-header' style={{backgroundColor:props.BGColor}}>
      <h1 id='logo' style={{color:props.infoColor}}>Where In The World?</h1>
      <button id='dark-mode-btn' onClick={props.darkMode} style={{color:props.infoColor}}>Dark Mode</button>
    </header>
  )
}

export default HeaderTemplate