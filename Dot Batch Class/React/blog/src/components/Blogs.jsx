import React, { useContext } from 'react';
import Spinner from './Spinner';
import Card from './Card';
import { AppContext } from '../context/AppContext'; // Import your context

const Blog = () => {
  // Consume context
  const { loading, posts } = useContext(AppContext);
  console.log('Printing the posts data');
  console.log(posts);

  return ( 
    <div className='w-11/12 max-w-[650px] flex flex-col gap-y-5 my-[70px] py-6'>
      {
        loading ? 
        (
          <Spinner />
        ) : 
        (
        posts.length === 0 ? 
          (
            <div>
              <p>No Posts Found</p>
            </div>
          ) : 
          (
            posts.map(post => ( 
              <div key={post.id}>

                <p className='font-bold text-xl'>{post.title}</p>

                <p >
                  By <span className='italic'>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span>
                </p>

                <p>
                  Posted On <span>{post.date}</span>
                </p>

                <p className='mt-4'>{post.content}</p>

                <div className='flex gap-x-3'>
                  {post.tags.map ( (tag,index) => {
                      return <span key={index} className='text-blue-700 text-xs font-semibold underline'>{`#${tag} `}</span>
                  })}
                </div>

              </div>
            )) 
          )
        )
      }

    </div>
  );
};

export default Blog;
