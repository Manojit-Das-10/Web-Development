import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {apiUrl,filterData} from "./data"
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';

const App = () => {

  const [courses,setCourses] = useState(null);

  const [loading,setLoading] = useState(true);

  async function fetchData (){
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        setCourses(output);
      }
      catch(error){
        toast.error("Something is wrong");
      }
      setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[])

  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <div>     
        <Filter
          filterData={filterData}
        />
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
     
    </div>
  );
}

export default App;
