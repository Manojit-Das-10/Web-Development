import React from 'react'
import BannerHeading from '../components/BannerHeading'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>

      <BannerHeading heading="Blogs Page"/>

      {/* all blogs container */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>

    </div>
  )
}

export default Blogs