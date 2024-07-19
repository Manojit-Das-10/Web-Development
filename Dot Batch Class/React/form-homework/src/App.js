import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label>First Name</label>

        <input type='text' placeholder='John' className='Name'></input>

        <label>Last Name</label>
        <input type='text' placeholder='Doe' className='Name'></input>

        <label>Email</label>
        <input type='email' placeholder='example@gmail.com' className='Name'></input>

        <label>Country</label>
        <select className='Name'>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Brazil</option>
        </select>
        
        <label>Street Adress</label>
        <input type='text' placeholder='1234 Main Street' className='Name'></input>

        <label>City</label>
        <input type='text' placeholder='Asansol' className='Name'></input>

        <label>State/Province</label>
        <input type='Text' placeholder='West Bengal' className='Name'></input>

        <label>Zip/Postal Code</label>
        <input type='number' placeholder='713301' className='Name'></input>

        <label>By Email</label>

        <div className='check-box'>
          <input type='checkbox'></input>
          <label>Comments</label>
        </div>
        <p>Get notified when someone posts a comment on a posting</p>
        
        
        <div className='check-box'>
          <input type='checkbox'></input>
          <label>Candidates</label>
        </div>

        <p>Get notified when someone posts a comment on a posting</p>


        <div className='check-box'>
          <input type='checkbox'></input>
          <label>Offer</label>
        </div>

        <p>Get notified when someone posts a comment on a posting</p>

        <label>Push Notifications</label>
        <p>These are delivered via SMS to your mobile phone.</p>

        <div className='radio'>
          <input type='radio' name='radio' id='radio1'></input>
          <label>Everything</label>
        </div>

        <div className='radio'>
          <input type='radio' name='radio' id='radio1'></input>
          <label>Same as email</label>
        </div>
        <div className='radio'>
          <input type='radio' name='radio' id='radio1'></input>
          <label>No push notifications</label>
        </div>
        
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
