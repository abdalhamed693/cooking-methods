import React from 'react'
import { createContext ,useReducer } from 'react'
export const ThemContext = createContext()
 const ThemReducer =(state ,action)=>{
  switch (action.type) {
    case 'CHANGE-COLOR':
        return {...state , color: action.payload}
    case 'CHANGE-MODE' :
        return {...state , modeee : action.payload}
    default: return state
  }
 }
export  function ThemProvider({children}) {
  const[state , dispatch] = useReducer(ThemReducer,{
    color : 'blueviolet' ,
    modeee : 'dark'
  })
  const changeColor = (color)=>{
    dispatch({type:'CHANGE-COLOR' , payload:color})
  }
  const changeMode = (modeee)=>{
    dispatch({type: 'CHANGE-MODE' , payload:modeee})
  }
  return (
    <ThemContext.Provider value={{...state , changeColor , changeMode}}>
     {children}
    </ThemContext.Provider>
  )
}
