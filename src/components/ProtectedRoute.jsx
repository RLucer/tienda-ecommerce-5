
import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from '../context/UserContext'

export const ProtectedRoute = ({children, redirectTo="/" }) => {
    
 
const { user } = useContext(UserContext);


    if (!user) {
    
        return <Navigate to="" />
    }
    return children ? children :<Outlet />
}


