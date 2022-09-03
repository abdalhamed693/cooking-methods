import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import SearchBar from './SearchBar'
import { useThem } from '../hooks/useThem'
export default function NavBar() {
  const{color } = useThem()
  return (
    <div className='navbar' style={{background: color}} >
       <Link className='navmark' to={'/'}>Cooking abood</Link>
      <div className='other'>
      <SearchBar/>
       <Link className='createbtn' to={'/create'}>Create a Recipe</Link>
      </div>
    </div>
  )
}
