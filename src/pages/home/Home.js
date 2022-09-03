import React from 'react'
import RecipeList from '../../components/RecipeList';
import { useEffect , useState } from 'react';
import { projectFireStore } from '../../firebase/config';
//styles 
import './home.css'
export default function Home() {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

   useEffect(() => {
     setIsPending(true)
     const unsup = projectFireStore.collection('recipes').onSnapshot((snapShot)=>{
      if (snapShot.empty) {
        setIsPending(false)
        setError('no recipes to load')
      } else {
        let response = []
        snapShot.docs.forEach(doc =>{
          response.push({ id:doc.id , ...doc.data()})
        })
        setIsPending(false)
        setData(response)
      }
     } , (err)=>{
       setError(err.message)
     })
      return ()=>{
        unsup()
      }
   }, [])
  return (
    <div className='home'>
      {error && <p className='erorr'>{error}</p>}
      {isPending&& <p className='panding'>loading ...</p>}
      {data&& <RecipeList recipes={data}/>}
    </div>
  )
}
