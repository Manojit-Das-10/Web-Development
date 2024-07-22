import React from 'react';
import frameImg from '../assets/frame.3a238e5f26d676376e1d.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

const Template = ({title , desc1 , desc2 , image , formType , setIsLoggedIn}) => {

  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x12 gap-y-0 justify-between'>
      
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'
            >{title}</h1>

            <p className='text-[1.125rem] leading-[1.625] mt-4'>
                <span className='text-white'>{desc1}</span>
                <br/>
                <span className='text-blue-300 italic'>{desc2}</span>
            </p>

            {formType === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-[#273848]'></div>
                <p className='text-[#273848] font-medium leading-[1.375rem] '>OR</p>
                <div className='w-full h-[1px] bg-[#273848]'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white opacity-90
            border border-[#0b1f2f] px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle fontSize={22}/>
                <p> Sign in with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImg} 
                alt='Pattern'
                height={504}
                width={558}
                loading='lazy'
            ></img>

            <img src={image} 
                alt='Student'
                height={504}
                width={490}
                loading='lazy'
                className='absolute -top-4 right-4'
            ></img>
        </div>

    </div>
  );
};

export default Template;