import React from 'react';
import Template from '../components/Template';
import SignupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
      title='Join the millions learning to code with StudyNotion for free'
      desc1='Build skills for today , tomorrow , and beyond.'
      desc2='Education to future-proof your career.'
      image={SignupImg}
      formType='signup'
      setIsLoggedIn={setIsLoggedIn}
    >

    </Template>
  );
};

export default Signup;