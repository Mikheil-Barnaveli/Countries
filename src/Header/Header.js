import React from 'react'
import './Header.css'
import HeaderTemplate from './HeaderTemplate'

function Header(props) {
  return (
    <HeaderTemplate darkMode = {props.darkMode} BGColor = {props.BGColor} infoColor={props.infoColor}/>
  )
}

export default Header