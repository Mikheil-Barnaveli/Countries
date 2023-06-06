import React from 'react'
import SearchTemplate from './SearchTemplate'
function Search(props) {
  return (
    <SearchTemplate data = {props.data} searchBGColor ={props.searchBGColor} searchColor={props.searchColor}/>
  )
}

export default Search