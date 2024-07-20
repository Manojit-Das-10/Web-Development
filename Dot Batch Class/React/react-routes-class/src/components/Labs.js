import React from 'react';
import { useNavigate } from 'react-router-dom';

const Labs = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate('/about')
  }

  return (
    <div>
        This is Labs page

        <button onClick={clickHandler}>
          Move to About Page
        </button>

    </div>
  );
};

export default Labs;