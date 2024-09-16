import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {

    const [blogs,setBlogs] = useState(['']);
    const [currentPage,setCurrentPage] = useState(1);
    const pageSize = 12; //Blogs per page
    const [selectedCategory,setSelecteCategory] = useState(null);
    const [activeCategory,setActiveCategory] = useState(null);

    useEffect( () => {
        async function fetchBlogs(){
            let url = `http://localhost:5000/blogs?page=${currentPage}&limits=${pageSize}`;

            // filtet by category
            if(selectedCategory){
                url += `&category=${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setBlogs(data);
        }
        fetchBlogs();
    },[currentPage,pageSize,selectedCategory])

    // page change btn
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelecteCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

  return (
    <div>
        {/* Category Section*/}
        <div>
            <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
        </div>

        {/* Blogcards section */}
        <div className='flex flex-col lg:flex-row gap-12'>
            {/* Blog components */}
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

            {/* Sidebar components */}
            <SideBar/>

        </div>

        {/* Pagination section */}
        <div>
            <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
        </div>

    </div>
  )
}

export default BlogPage;