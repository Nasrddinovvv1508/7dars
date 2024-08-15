import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout