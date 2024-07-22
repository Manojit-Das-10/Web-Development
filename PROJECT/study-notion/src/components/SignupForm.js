import React from 'react';
import  { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword,setShowPassword] = useState(false);

    const [accountType,setAccountType] = useState('student');
    
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);


    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error('Password do not matched')
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData ={
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log('Printing account data');
        console.log(finalData);
        navigate('/dashboard');
    }


  return (
    <div className=''>
        {/* Student-Instructor tab */}
        <div className='flex bg-[#081a29] p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button 
            className={` ${accountType === 'student' ?
                'bg-[#05121c] text-white' :
                'bg-transparent text-white opacity-80'} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={ () => {
                setAccountType('student')
            }}>
                Student
            </button>

            <button
            className={` ${accountType === 'instructor' ?
                'bg-[#05121c] text-white' :
                'bg-transparent text-white opacity-80'} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={ () => {
                setAccountType('instructor')
            }}>
                Instructor
            </button>

        </div>

        <form onSubmit={submitHandler}>

            {/* Contain First & Last name */}
            <div className='flex justify-between mt-5'>
                <label>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                        First Name <sup className='text-red-600'>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='bg-[#081a29] rounded-[0.5rem] text-[#eeecec] w-full p-[12px] 
                        border-b-[1px] border-[#a8cdf7]'
                    ></input>
                </label>

                <label>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                        Last Name <sup className='text-red-600'>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='bg-[#081a29] rounded-[0.5rem] text-[#eeecec] w-full p-[12px] 
                        border-b-[1px] border-[#a8cdf7]'
                    ></input>
                </label>

            </div>
            
            {/* Email Address */}
            <div className='mt-5'>   
                <label className='w-full mt-4'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            Email Address <sup className='text-red-600'>*</sup>
                        </p>
                        <input 
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-[#081a29] rounded-[0.5rem] text-[#eeecec] w-full p-[12px] 
                            border-b-[1px] border-[#a8cdf7]'
                        ></input>
                </label>
            </div>

            {/* Password and confirm password */}

            <div className='flex justify-between mt-5'>

                <label className='relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                    Create Password<sup className='text-red-600'>*</sup>
                </p>
                <input 
                    required
                    type={showPassword ? ('text') : ('password')}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='bg-[#081a29] rounded-[0.5rem] text-[#eeecec] w-full p-[12px] 
                    border-b-[1px] border-[#a8cdf7]'
                >
                </input>

                <span className='absolute right-3 top-[38px] cursor-pointer'
                onClick={ () =>
                    setShowPassword( (prev) => !prev)}>
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> : 
                    <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                </span>
                </label>


                <label className='relative'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                       Confirm Password<sup className='text-red-600'>*</sup>
                    </p>
                    <input 
                        required
                        type={showConfirmPassword ? ('text') : ('password')}
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        className='bg-[#081a29] rounded-[0.5rem] text-[#eeecec] w-full p-[12px] 
                        border-b-[1px] border-[#a8cdf7]'
                    >
                    </input>

                    <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={ () =>
                        setShowConfirmPassword( (prev) => !prev)}>
                        {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> :
                         <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
                    </span>
                </label>

            </div>

            <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-[#0b1f2f] px-[12] py-[8px] mt-10'>
                Create Account
            </button>

        </form>


    </div>
  );
};

export default SignupForm;