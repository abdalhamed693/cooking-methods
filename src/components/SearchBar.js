import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'
export default function SearchBar() {
    const navigate = useNavigate()
    const [term , setTerm] = useState('')
    const handelSubmit = (e)=>{
      e.preventDefault()
      navigate(`/search?q=${term}`)
    }
  return (
    <div className='serchBar'>
        <form onSubmit={handelSubmit}>
          <label htmlFor='search'>Search: </label>
          <input type="text"
          id='search'
          onChange={(e)=>setTerm(e.target.value)}
          />
        </form>
    </div>
  )
}
