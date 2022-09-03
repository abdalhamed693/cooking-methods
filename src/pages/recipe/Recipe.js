import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projectFireStore } from '../../firebase/config';
import './recipe.css'
export default function Recipe() {
const {id} =useParams()
const [data, setData] = useState(null)
const [isPending, setIsPending] = useState(false)
const [error, setError] = useState(null)
 useEffect(() => {
  setIsPending(true)
  const unsup = projectFireStore.collection('recipes').doc(id).onSnapshot((doc) =>{
    setIsPending(true)
    if (doc.exists) {
      setData(doc.data())
      setIsPending(false)
    } else {
      setError('could not fetch the data')
      setIsPending(false)
    }
   
  })
    return ()=>{
      unsup()
    }  
 }, [id])


  return (
    <div className='recipe'>
      {error && <p className='erorr'>{error}</p>}
      {isPending && <p> loading ....</p>}
      {data && (
      <>
       <h2 className='page-title'>{data.title}</h2>
       <p>takes{data.cookingTime} to cook.</p>
       <ul>
        {data.ingredients.map((inger)=>(
          <li key={inger}>{inger}</li>
        ))}
       </ul>
       <p className='methods'>{data.method}</p>
      </>
      )}
    </div>
  )
}
