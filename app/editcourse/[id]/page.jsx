import React from 'react'
import Editcourseform from '../../../components/Editcourseform'

const getCourseById=async(id)=>
  {
     try {
      const res=await fetch(`http://localhost:3000/api/course/${id}`,{cache:'no-store'})

      if(!res.ok)
      {
        console.log('failed to fetch')
      }
      return res.json();

      
     } catch (error) {
      console.log('error fetching')
     }

  }

const Editcourse = async({params}) => {
  const {id}=params;
  const course=await getCourseById(id);
  console.log(course);
  const {title,description}=course;
  return (

         <Editcourseform id={id} title={title} description={description}/>) 
    
}

export default Editcourse;
