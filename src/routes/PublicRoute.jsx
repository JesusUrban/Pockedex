import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useName } from '../hooks/useName'

function PublicRoute({children}) {
   const {name} = useName()
      
      if(name){
         return <Navigate to= "/pokedex"></Navigate>
      }
    return children  ? children : <Outlet/>
  }
  
export default PublicRoute