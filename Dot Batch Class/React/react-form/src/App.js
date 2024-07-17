import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName , setFirstName] = useState("");
  // const [lasttName , setLastName] = useState("");


  // function changeFirstNameHandler(event){
  //   // console.log('Printing first name');
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log('Printing last name');
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormdData] = useState( 
    {firstName: "",
    lastName: "",
    email: "",
    comment: "",
    checkbox: true,
    radio:"",
    favCar:""
    }
  );
  
  function changeHandler(event){

    const {name,value,checked,type} = event.target

    setFormdData(prevFormData =>{
      return{
        ...prevFormData,
        [name] : type ==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log('Finally printig the entire form data');
    console.log(formData);

  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>

          <br/>

          <input 
            type='text'
            placeholder='First Name'
            onChange={changeHandler}
            name='firstName'
            value={formData.value}
          />
          <br/> 
          <br/>

          <input 
            type='text'
            placeholder='Last Name'
            onChange={changeHandler}
            name='lastName'
            value={formData.value}
          />

          <br/> 
          <br/>

          <input
            type='email'
            placeholder='Enter your email'
            onChange={changeHandler}
            name='email'
            value={formData.value} 
          />

          <br/> 
          <br/>
          
          <textarea
            placeholder='Enter your comment here..'
            onChange={changeHandler}
            name='comment'
            value={formData.value} 
          />

          <br/> 
          <br/>

          <input 
            type='checkbox'
            onChange={changeHandler}
            name='checkbox'
            id='checkbox'
            checked={formData.checkbox}
          />

          <label htmlFor='checkbox'> Am I visible?</label>

        <br/>
        <br/>

        <fieldset>
          <legend>Mode:</legend>

           <input
            type='radio'
            onChange={changeHandler}
            name='radio'
            id='radio'
            value="Dark Mode"
            checked={formData.radio === "Dark Mode"}
          />
          
          <label htmlFor='radio'> Dark Mode </label>

          <input
            type='radio'
            onChange={changeHandler}
            name='radio'
            id='radio2'
            value="Light Mode"
            checked={formData.radio === "Light Mode"}
          />
          
          <label htmlFor='radio2'> Light Mode</label>

        </fieldset>

        <label htmlFor='favCar'> Favorite Car </label>

        <select
          onChange={changeHandler}
          name='favCar'
          id='favCar'
          value={formData.value}
        >
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Ducati">Ducati</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Lamborghini">Lamborghini</option>
        </select>

        <br/><br/>

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
