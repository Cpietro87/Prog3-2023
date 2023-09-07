import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

interface PotectedProp {
    canActivate: any,
    redirectPath: string
}

function ProtectedRoute({
    canActivate,
    redirectPath
}: PotectedProp) {
    console.log('Tipo de dato de canActivate:', typeof canActivate);
    if (!canActivate){
        return <Navigate to={redirectPath} replace/>
    }
  return <Outlet/>
}

export default ProtectedRoute



