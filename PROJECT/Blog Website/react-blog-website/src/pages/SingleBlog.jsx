import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BannerHeading from '../components/BannerHeading';
import {FaUser} from "react-icons/fa"
import {FaClock} from "react-icons/fa6"
import SideBar from '../components/SideBar';


const SingleBlog = () => {

    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];

  return (
    <div>
        <BannerHeading heading="Single Blog Page" />

        {/* Blog details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8'>{title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div className='text-base text-gray-500'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto officia at amet, eaque incidunt ipsa saepe odio deleniti, ab impedit qui cum aliquam repellendus non architecto vitae ad ducimus praesentium earum ipsum illum aspernatur! Nostrum ipsa minima optio sunt.
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptas magnam quod porro exercitationem aperiam nemo iusto aliquam, dolorem nobis explicabo asperiores optio ratione, quasi facilis odio at facere maxime? Laboriosam eos id doloribus necessitatibus.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus aliquid aperiam eum voluptatem distinctio libero earum magnam dolor aliquam tempore, hic officia sapiente, quae deleniti minus magni assumenda ipsum.</p>
                    
                    <br /><br />

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto officia at amet, eaque incidunt ipsa saepe odio deleniti, ab impedit qui cum aliquam repellendus non architecto vitae ad ducimus praesentium earum ipsum illum aspernatur! Nostrum ipsa minima optio sunt.
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptas magnam quod porro exercitationem aperiam nemo iusto aliquam, dolorem nobis explicabo asperiores optio ratione, quasi facilis odio at facere maxime? Laboriosam eos id doloribus necessitatibus.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus aliquid aperiam eum voluptatem distinctio libero earum magnam dolor aliquam tempore, hic officia sapiente, quae deleniti minus magni assumenda ipsum.</p>


                </div>

            </div>

            <div className='lg:w-1/2'>
                <SideBar/>
            </div>

        </div>


    </div>
  )
}

export default SingleBlog