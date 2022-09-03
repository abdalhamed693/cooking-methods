import React from 'react'
import { useThem } from '../hooks/useThem'
import './themSelctor.css'
import mode from '../assest/mode.svg'
export default function ThemSelctor() {
    const {changeColor , changeMode , modeee} = useThem()
    const colors = ['blueviolet','orange','olivedrab']
    const handelMode = ()=>{
     changeMode(modeee === 'dark' ? 'light' : 'dark')
    }
    console.log(modeee);
  return (
    <div className='them-selctor'>
        <div className='mode'>
          <img src={mode}
          alt={'what-ever'}
          onClick={handelMode}
          style={{filter: modeee === 'dark'? 'invert(100%)' : 'invert(20%)'}}
          />
        </div>
        <div className='buttons'>
         {colors.map((color)=>(
         <div
           key={color}
           onClick={()=> changeColor(color)}
           style={{background: color}}
           className={'color'}
           />
          ))}
        </div>
    </div>
  )
}
