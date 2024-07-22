import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg'
import toast from 'react-hot-toast';

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

      <Link to="/">
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy'></img>
      </Link>

      <nav>
        <ul className='flex gap-x-6 text-white text-[18px]'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}

      <div className='flex items-center gap-x-4'>
        { !isLoggedIn &&
          <Link to="/login">
            <button className='bg-[#061b2d] text-white opacity-90 py-[8px] px-[12px] rounded-[8px] border border-[#031524]'>
              Log in
            </button>
          </Link>
        }

        { !isLoggedIn &&
          <Link to="/signup">
            <button className='bg-[#061b2d] text-white opacity-90 py-[8px] px-[12px] rounded-[8px] border border-[#031524]'>
              Sign up
            </button>
          </Link>
        }

        { isLoggedIn &&
          <Link to="/">
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }} className='bg-[#061b2d] text-white opacity-90 py-[8px] px-[12px] rounded-[8px] border border-[#031524]'>
              Log Out
            </button>
          </Link>
        }

        { isLoggedIn &&
          <Link to="/dashboard">
            <button className='bg-[#061b2d] text-white opacity-90 py-[8px] px-[12px] rounded-[8px] border border-[#031524]'>
              Dashboard
            </button>
          </Link>
        }

      </div>

    </div>
  );
};

export default Navbar;