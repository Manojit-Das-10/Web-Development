import React from 'react';
import frameImg from '../assets/frame.3a238e5f26d676376e1d.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({title , desc1 , desc2 , image , formType , setIsLoggedIn}) => {

  return (
    <div>
      
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formType === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign in with Google</p>
            </button>

        </div>

        <div>
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
            ></img>
        </div>

    </div>
  );
};

export default Template;