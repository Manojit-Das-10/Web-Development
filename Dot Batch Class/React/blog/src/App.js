import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes , Route, useSearchParams, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( () => {
    
    const page = searchParams.get('page') ?? 1;

    if(location.pathname.includes("tags")){
      // It's mean I want to the page data
      const tag = location.pathname.split("/").at(-1).replace("-","");
      fetchBlogPosts(Number(page),tag);
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-","");
      fetchBlogPosts(Number(page),null,category);
    }

    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search])

  return (

    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/blog/:blogId" element = {<BlogPage/>}/>
      <Route path="/tag/:tag" element = {<TagPage/>}/>
      <Route path="/categories/:category" element = {<CategoryPage/>}/>

    </Routes>

  );
}

export default App;
