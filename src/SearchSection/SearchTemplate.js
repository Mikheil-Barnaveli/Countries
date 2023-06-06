import React, { useState } from 'react'
import './Search.css'
import searchIcon from '../Images/searchBtnIcon.png'
import { useNavigate } from 'react-router-dom';

function SearchTemplate(props) {
  
  let findCCA3 = ""

  let navigate = useNavigate()
  const [inputValue, setInputValue] = useState('');

  // function findCountryByCommonName  (array, countryName) {
  //   const country = array.find(item =>
  //     item.name.common.toLowerCase() === countryName.toLowerCase()
  //   );
  //   return country ? country.cca3 : null;
  // };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  function handleSearchClick() {
    
    for (let i = 0; i < props.data.length; i++) {
      const element = props.data[i];
      if(element.name.common.toLowerCase() === inputValue.toLowerCase()){
       console.log(element.cca3);
       findCCA3 = element.cca3
      }
    }

    navigate(`/${findCCA3}`)
  }

  function handleKeyUp(event) {
    if (event.key === 'Enter') {
      handleSearchClick()
    }
  }


  return (
    <div id='search-div'>
    <input type='text' id='search-input' placeholder='Search for a country...' value={inputValue} onChange={handleInputChange} onKeyUp={handleKeyUp}></input>
    <button id='search-btn' onClick={handleSearchClick}>
        <img src={searchIcon} alt='search'></img>
    </button>
    </div>
  )
}

export default SearchTemplate