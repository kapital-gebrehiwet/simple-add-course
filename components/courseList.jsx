import React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { HiTrash } from 'react-icons/hi'; // Importing the Trash icon
import Link from 'next/link';
import Removebutton from './Removebutton';

export async function getCourses() { 
    const res = await fetch('http://localhost:3000/api/course', {
        cache: 'no-cache'
    });
    return res.json(); // Return the parsed JSON response
}

const CourseList = async () => {
    const courses = await getCourses();
    console.log(courses); // Debug log

    return (
        <div className='flex justify-center h-screen bg-gray-100'>
            <div className='space-y-2 mt-10'> 
                {courses.map((course) => (
                    <div key={course._id} className='flex h-40 flex-col justify-between space-y-1 items-start bg-white p-4 rounded-lg shadow-md max-w-md w-full'> {/* Adjusted padding and spacing */}
                        <h2 className='text-3xl font-bold mb-1'>{course.title}</h2> {/* Adjusted margin */}
                        <div className='text-xl text-gray-700 mb-2'>{course.description}</div> {/* Adjusted margin */}

                        <div className='flex justify-end items-start w-full space-x-3'> {/* Adjusted space between icons */}
                            <Link href={`editcourse/${course._id}`}>
                                <HiPencilAlt className='text-4xl cursor-pointer hover:text-blue-600 transition-colors' /> 
                            </Link>
                            <Removebutton id={course._id}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;