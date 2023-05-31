import React from 'react'
import Search from './Search'

function SearchFilter() {
  return (
    <section style={{width:'100%', height:"15dvh", backgroundColor:"green", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", padding:"2rem"}}>
      <Search/>
      <button style={{width:"15rem", height:"5dvh"}}></button>
    </section>
  )
}

export default SearchFilter