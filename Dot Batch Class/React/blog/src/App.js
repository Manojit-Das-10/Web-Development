import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  },[])

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-1 justify-center">
      
      <Header/>

      <Blogs/>

      <Pagination/>

    </div>
  );
}

export default App;
