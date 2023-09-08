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
    if (!canActivate){
        return <Navigate to={redirectPath} replace/>
    }
  return <Outlet/>
}

export default ProtectedRoute



