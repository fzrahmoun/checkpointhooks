import React from 'react'

//Component Filter with props 

function Filter({filter, handleFilter ,handleSearch}) {
  return (
    <div style={{marginTop:20,marginBottom:20}}>
        <input type='text' placeholder='Filter by title or rating' name='filter' value={filter} onChange={handleFilter}/>
        <button onClick={handleSearch} style={{backgroundColor:'#e50914',color:'white',borderColor:"#e50914"}}>Filter</button>
    </div>    
    )
}

export default Filter