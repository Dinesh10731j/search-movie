import React from 'react'

const Search = ({handleChange,handleSearch,search}) => {
  return (
    <div className='p-7 z-20  sticky'>
    <div className="sm:ml-12 md:ml-15 ">
    <input type='text' placeholder='Search Movie...'
     value={search} onChange={(e)=>handleChange(e.target.value)}
     className='ml-6 px-5
     py-2 outline-none border-none shadow-xl rounded-md 
     bg-gradient-to-r from bg-cyan-800 to-cyan-700 text-white'/>
        <button onClick={()=>handleSearch()} className="bg-gradient-to-r from-cyan-900 to-blue-500  ml-6        
        px-5 py-2 rounded-lg text-white shadow-lg">Search</button>

    </div>
       
    </div>
  )
}
export default Search