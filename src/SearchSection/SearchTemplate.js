import React from 'react'
import './Search.css'
import searchIcon from '../Images/searchBtnIcon.png'

function SearchTemplate() {
  return (
    <div id='search-div'>
    <input type='text' id='search-input' placeholder='Search for a country...'></input>
    <button id='search-btn'>
        <img src={searchIcon} alt='search'></img>
    </button>
    </div>
  )
}

export default SearchTemplate