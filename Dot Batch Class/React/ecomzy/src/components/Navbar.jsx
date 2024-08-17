import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-500'>
      <div className='flex flex-row justify-between'>
        <NavLink to="/">
          <div>
            <img src="/Fevicon.png" alt="" width={50} height={50} />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <div>
              <p className=''>Home</p>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar