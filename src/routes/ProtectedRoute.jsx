import React from 'react'
import { useName } from '../hooks/useName'
import { Navigate } from 'react-router'
import { Outlet } from 'react-router'


function ProtectedRoute({children}) {
    const {name} = useName()

    if(!name){
      return <Navigate to="/"></Navigate> 
    }
  return children ? children : <Outlet/>
}

export default ProtectedRoute