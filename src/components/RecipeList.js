import React from 'react'
import { Link } from 'react-router-dom'
import { useThem } from '../hooks/useThem'
import { projectFireStore } from '../firebase/config'
import trash from '../assest/trash.svg'
import './RecipeList.css'
export default function RecipeList({recipes}) {
  const {color} = useThem()
  const handelclick = (id)=>{
   projectFireStore.collection('recipes').doc(id).delete()
  }
  return (
    <div className='recipelist'>
        {recipes.map((recipe)=>(
            <div key={recipe.id} className='card'>
              <h3>{recipe.title}</h3>
              <p>{recipe.cookingTime} to make..</p>
              <div>{recipe.method.substring(0,100)}...</div>
              <img
              src={trash}
              onClick={()=> handelclick(recipe.id)}
              className = 'delete'
              />
              <Link to={`/recipe/${recipe.id}`}
              style={{background: color}}
              >Cook This</Link>
            </div>
        ))}
    </div>
  )
}
