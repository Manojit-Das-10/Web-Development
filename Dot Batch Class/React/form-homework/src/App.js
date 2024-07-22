import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData,SetformData] = useState({
    fName:"",lName:"",email:"",country:"India",
    street:"",city:"",state:"",postalCode:"",
    comments:false,candidates:false,offer:false,pushNotifications:""
  })

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    SetformData( (prev) => ({...prev, [name]:type === "checkbox" ? checked : value}));
  }

  function submitHandler(event){
    event.preventDefault();
    console.log('Finally printing the value of Form Data:');
    console.log(formData);
  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor='fName'>First Name</label>

        <input type='text' placeholder='John' id='fName' name='fName' value={formData.fName} onChange={changeHandler} className='Name'></input>

        <label htmlFor='lName'>Last Name</label>
        <input type='text' placeholder='Doe' id='lName' name='lName' value={formData.lName} onChange={changeHandler}  className='Name'></input>

        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='example@gmail.com' id='email' name='email' value={formData.email} onChange={changeHandler} className='Name'></input>

        <label htmlFor='country'>Country</label>
        <select className='Name' id='country' name='country' value={formData.country} onChange={changeHandler}>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Brazil</option>
        </select>
        
        <label htmlFor='street'>Street Adress</label>
        <input type='text' placeholder='1234 Main Street' id='street' name='street' value={formData.street} onChange={changeHandler} className='Name'></input>

        <label htmlFor='city'>City</label>
        <input type='text' placeholder='Asansol' id='city' name='city' value={formData.city} onChange={changeHandler} className='Name'></input>

        <label htmlFor='state'>State/Province</label>
        <input type='text' placeholder='West Bengal' id='state' name='state' value={formData.state} onChange={changeHandler} className='Name'></input>

        <label htmlFor='postalCode'>Zip/Postal Code</label>
        <input type='number' placeholder='713301' id='postalCode' name='postalCode' value={formData.postalCode} onChange={changeHandler} className='Name'></input>

        <label>By Email</label>

        <div className='check-box'>
          <input type='checkbox' id='comments' name='comments' value={formData.comments} onChange={changeHandler}></input>
          <label htmlFor='comments'>Comments</label>
        </div>
        <p>Get notified when someone posts a comment on a posting</p>
        
        
        <div className='check-box'>
          <input type='checkbox' id='candidates' name='candidates' value={formData.candidates} onChange={changeHandler}></input>
          <label htmlFor='candidates'>Candidates</label>
        </div>

        <p>Get notified when someone posts a comment on a posting</p>


        <div className='check-box'>
          <input type='checkbox' id='offer' name='offer' value={formData.offer} onChange={changeHandler}></input>
          <label htmlFor='offer'>Offers</label>
        </div>

        <p>Get notified when someone posts a comment on a posting</p>

        <label>Push Notifications</label>
        <p>These are delivered via SMS to your mobile phone.</p>

        <div className='radio'>
          <input type='radio' name='pushNotifications' id='radio1' value="Everything" onChange={changeHandler}></input>
          <label htmlFor='radio1'>Everything</label>
        </div>

        <div className='radio'>
          <input type='radio' name='pushNotifications' id='radio2' value="Same as email" onChange={changeHandler}></input>
          <label htmlFor='radio2'>Same as email</label>
        </div>
        <div className='radio'>
          <input type='radio' name='pushNotifications' id='radio3' value="No push notifications" onChange={changeHandler}></input>
          <label htmlFor='radio3'>No push notifications</label>
        </div>
        
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
