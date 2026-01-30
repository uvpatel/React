import React from 'react'


// const person = {
//     name: 'bruce',
//     age: 36,
//     gothham
// }
export default function Search({searchTerm , setSearchTerm}) {
    

    
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search" />

            <input 
                type='text'
                placeholder='Search throught thoudands of movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

            />
        </div>
    </div>
  )
}
