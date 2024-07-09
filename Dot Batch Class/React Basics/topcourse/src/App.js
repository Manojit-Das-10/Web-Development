import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text,setText] = useState('');
  const[name,setName] = useState('mano');

  // Variation 1 -> Every Render
  // useEffect( () =>{
  //   console.log('UI Rendering Done');
  // });

  // Variation 2 -> First Render
  // useEffect( () => {
  //   console.log('UI Rendering Done');
  // },[]);

  // Variation 3 -> First Render + whenever dependency changes
  // useEffect( () => {
  //   console.log('Change Observed');
  // },[name]);

  // Variation 4 -> To handle unmounting of a component
  useEffect( () => {
    // add event listener
    console.log('Listener added');

    // remove event listener
    return () => {
      console.log('Listener removed');
    }
     
  },[text]);


  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
