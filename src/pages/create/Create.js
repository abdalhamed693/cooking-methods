import React from 'react'
import { useState } from 'react'
import'./create.css'
import { useNavigate } from 'react-router-dom'
import { projectFireStore } from '../../firebase/config';
export default function Create() {
  const [title ,setTitle] = useState('')
  const [method ,setMethod] = useState('')
  const [cookingTime ,setCookingTime] = useState('')
  const [newIngredients , setNewIngredients] = useState('')
  const [ingredients , setIngredients] = useState([])
  const navigate = useNavigate()
  const handelSubmit = async (e)=>{
    e.preventDefault()
    try {
     await projectFireStore.collection('recipes').add({title ,ingredients  ,method ,cookingTime : cookingTime + ' minutes'})
     navigate('/')
    } catch(err ){
      console.log(err);
    }
  };
 

  const handelIngredients = (e)=>{
    e.preventDefault()
    const ing = newIngredients.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIng=>[...prevIng , ing])
     
    }
    setNewIngredients('')
  }
  return (
    <div className='create'>
      <h2 className='page-title'>Add a new Recipe</h2>
      <form onSubmit={handelSubmit}>
        <label>
          <span>Recipe title</span>
          <input
          type="text"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

         <div className='inger'>
          <label>
            <span>tell us the Ingredients</span>
           <input
           type="text"
           onChange={(e)=>setNewIngredients(e.target.value)}
           value={newIngredients}
           />           
          </label>
           {ingredients.map((ing)=>(
            <p key={ing}>  {ing}  ,</p>
           ))}
          <button onClick={handelIngredients}>add</button>
         </div>
        <label>
          <span>Recipe method:</span>
          <textarea
          onChange={(e)=>setMethod(e.target.value)}
          value={method}
          />
        </label>


        <label>
          <span>Cooking Time (minutes):</span>
          <input
          type="number"
          onChange={(e)=>setCookingTime(e.target.value)}
          value={cookingTime}
          />
        </label>
        <button>submite</button>
      </form>
    </div>
  )
}
