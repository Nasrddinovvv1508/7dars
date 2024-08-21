import React, { useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';

// components
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  let [user, setUser] = useState(false);
  let routes = createBrowserRouter([
    {
      path: `/`,
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: `/about`,
          element: <About />
        },
        {
          path: `/products`,
          element: <Products />
        }
      ]
    },
    // {
    //   path: `/login`,
    //   element: user ? <Navigate to={`/`} /> : <Login />
    // },
    {
      path: `/register`,
      element: user ? <Navigate to={`/`} /> : <Register />
    }
  ])

  return <RouterProvider router={routes} />
}

export default App