import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  let routes = createBrowserRouter([
    {
      path: `/`,
      element: <MainLayout />,
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
    }
  ])

  return <RouterProvider router={routes} />
}

export default App