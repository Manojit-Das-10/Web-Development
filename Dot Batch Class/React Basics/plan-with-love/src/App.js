import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tours from './components/Tours';

function App() {

  const [tours , setTours] = useState(data);


  return (
    
    <div>
      <Tours tours={tours}></Tours>
    </div>

  );
}

export default App;
