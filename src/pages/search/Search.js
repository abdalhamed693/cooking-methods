import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
export default function Search() {
  const qurystring = useLocation().search
  const quryParams = new URLSearchParams(qurystring)
  const qury = quryParams.get('q')
  const url = 'http://localhost:3000/recipes?q='+qury
  const {data , isPending , erorr} = useFetch(url)
  
  if (data) {
    if (data.length ===0) {
      return (<div>
        <h2 className='erorr'>No recipe including {qury} was founded</h2>
      </div>)
    }
  }

  return (
    <div>
      <h1 className='title'>Recipe including {qury}</h1> 
      {erorr && <p>{erorr}</p>}
      {isPending && <p>loading....</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
    

  )
}
