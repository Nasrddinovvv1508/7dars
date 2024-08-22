import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ user, children }) {
    if (user) {
        return children
    } else {
        return <Navigate to={'/enter'} />
    }
}

export default ProtectedRoutes