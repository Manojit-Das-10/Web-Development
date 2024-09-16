import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook , FaDribbble, FaTwitter, FaBars, FaXmark} from "react-icons/fa6";

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Navitems
    const navitems = [
        {path:"/",link:"Home"},
        {path:"/services",link:"Services"},
        {path:"/about",link:"About"},
        {path:"/blogs",link:"Blogs"},
        {path:"/contact",link:"Contact"},
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>

            <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></a>

            {/* navitems for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navitems.map( ({path,link}) => 
                    <li className='text-white' key={path}>
                        <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* Menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>

                <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
                <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
                <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
                <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>

            </div>

            {/* Mobile menu btn, display in mobile screen view */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>

                    }
                </button>
            </div>

        </nav>
        
        {/* menu items only for mobiles */}
        <div>
            <ul className={`gap-12 text-lg md:hidden block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                    navitems.map( ({path,link}) => 
                    <li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </div>

    </header>
  )
}

export default Navbar