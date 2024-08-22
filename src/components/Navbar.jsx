import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { logOut } from '../app/userSlice';

function Navbar() {
  let dispatch = useDispatch()

  let logout = async () => {
    if (window.confirm(`Are You Sure`)) {
      try {
        await signOut(auth);
        dispatch(logOut())
      } catch (error) {
        console.error("An error happened during sign-out:", error);
      }
    }
  }

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
            <li>
              <button onClick={logout} className='btn btn-error text-white'>Log Out</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
