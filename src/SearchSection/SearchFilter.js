import React from 'react'
import Search from './Search'
import Filter from './Filter'

function SearchFilter(props) {
  return (
    <section style={{width:'100%', height:"20dvh", backgroundColor:"#F2F2F2", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", padding:"2rem", gap:"1rem"}}>
      <Search data = {props.data}/>
      <Filter />
    </section>
  )
}

export default SearchFilter