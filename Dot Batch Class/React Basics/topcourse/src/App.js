import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {apiUrl,filterData} from "./data"
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';

function App() {

  const [courses,setCourses] = useState(null);

  useEffect ( () => {
    const fetchData = async () =>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        setCourses(output.data);
      }
      catch(toast){
        toast.error("Something is wrong");
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <Navbar/>

      <Filter
        filterData={filterData}
      />

      <Cards 
        courses = {setCourses}
      />

    </div>
  );
}

export default App;
