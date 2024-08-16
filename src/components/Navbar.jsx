import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-base-300">
      <div className='navbar speacial-container'>
        <div className="flex-1">
          <Link to={`/`} className="bg-red-600 hover:bg-red-800 py-2 px-4 rounded-lg text-white font-bold text-xl">Store</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg gap-3">
            <li><NavLink to={`/`}>Main</NavLink></li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="bg-base-100 rounded-t-none p-2 w-[190px] z-10">
                  <li><NavLink to={`/about`}>About</NavLink></li>
                  <li className='mt-2'><NavLink to={`/products`}>Products</NavLink></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar