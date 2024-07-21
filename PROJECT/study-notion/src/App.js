import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">
        
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="signup" element ={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="dashboard" element ={<Dashboard/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
