import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';
import { isAuthChange, login } from './app/userSlice';

function App() {
  let dispatch = useDispatch();

  let { user, isAuthReady } = useSelector((state) => state.user)
  console.log(user);
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
      path: `/enter`,
      element: user ? <Navigate to={`/`} /> : <Register />
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(isAuthChange(user));
    })
  }, [])

  return <>
    {isAuthReady &&
      <RouterProvider router={routes} />
    }
  </>
}

export default App