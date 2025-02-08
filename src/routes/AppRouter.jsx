import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../home/Home'
import Pokemon from '../pokemon/Pokemon'
import Pokedex from '../pokedex/Pokedex'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
function AppRouter() {
  return (
     <Routes>
        <Route path='/' element= {<PublicRoute><Home/></PublicRoute>}/>
        
        <Route path='/pokedex' element={<ProtectedRoute></ProtectedRoute>} >
           <Route index element={<Pokedex></Pokedex>}/>
           <Route path=':name'element={<Pokemon></Pokemon>}/>
        </Route>
     </Routes>
  )
}

export default AppRouter