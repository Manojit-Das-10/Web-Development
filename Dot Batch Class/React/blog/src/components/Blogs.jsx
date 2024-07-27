import React, { useContext } from 'react';
import Spinner from './Spinner';
import Card from './Card';
import { AppContext } from './AppContext'; // Import your context

const Blog = () => {
  // Consume context
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
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
            posts.map(post => <Card/>) 
          )
        )
      }

    </div>
  );
};

export default Blog;
