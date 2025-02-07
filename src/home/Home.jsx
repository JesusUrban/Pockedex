import React, { useRef } from 'react'
import {useName} from '../hooks/useName'
import './styles/Home.scss'
import { useNavigate } from 'react-router'




function Home() {
  const inputRef = useRef()
 const { setName,name}= useName()

 const  navigate = useNavigate()

 const handleSetName = ( ) =>{
  if(!inputRef.current.value)return

  setName(inputRef.current.value)
  navigate("/pokedex")
 }
  return (
    <div className='home'>
      {name && <h2>Hello {name}!</h2>}
       <img src="https://composer0.github.io/Pokemon-Pokedex-API/img/pokedex-hero.png" alt="" />
    

        <h2 className=''>¡Hey Trainer!</h2>
        <p>To get started, give us your name</p>
        
        <input className='' type="text" 
         ref={inputRef}
         onKeyDown={(e) => e.key === 'Enter' &&  handleSetName()}
         />
         <button className='Button1' onClick={handleSetName} >Start</button>
    </div>
  )
}

export default Home