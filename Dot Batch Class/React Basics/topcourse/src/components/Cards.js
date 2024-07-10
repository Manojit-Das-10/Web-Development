import React from 'react';
import Card from './Card';

const Cards = ({courses}) => {

  let allcourses = [];
  // It returns a list of all courses recived from the api response
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) =>{
            allcourses.push(course);
        })
    });
    return allcourses;
  }

  return (
    <div>
        {
          getCourses().map( (course) => {
            return <Card key={course.id} course={course}/>
          })
        }
    </div>
  );
};

export default Cards;