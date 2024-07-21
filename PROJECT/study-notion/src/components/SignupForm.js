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
        console.log('Printing account data');
        console.log(accountData);
        navigate('/dashboard');
    }


  return (
    <div>
        {/* Student-Instructor tab */}
        <div>
            <button>
                Student
            </button>

            <button>
                Instructor
            </button>

        </div>

        <form onSubmit={submitHandler}>

            {/* Contain First & Last name */}
            <div>
                <label>
                    <p>
                        First Name <sup>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                    ></input>
                </label>

                <label>
                    <p>
                        Last Name <sup>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                    ></input>
                </label>

            </div>
            
            {/* Email Address */}
            <label>
                    <p>
                        Email Address <sup>*</sup>
                    </p>
                    <input 
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                    ></input>
            </label>

            {/* Password and confirm password */}

            <div>

                <label>
                <p>
                    Create Password<sup>*</sup>
                </p>
                <input 
                    required
                    type={showPassword ? ('text') : ('password')}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                >
                </input>

                <span onClick={ () =>
                    setShowPassword( (prev) => !prev)}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
                </label>


                <label>
                    <p>
                       Confirm Password<sup>*</sup>
                    </p>
                    <input 
                        required
                        type={showConfirmPassword ? ('text') : ('password')}
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        name='confirmPassword'
                    >
                    </input>

                    <span onClick={ () =>
                        setShowConfirmPassword( (prev) => !prev)}>
                        {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                </label>

            </div>

            <button>
                Create Account
            </button>




        </form>



    </div>
  );
};

export default SignupForm;