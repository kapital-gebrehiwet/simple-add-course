'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react';

const AddCourse = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form behavior

        if (!title || !description) {
            alert('The title and the description are required');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/course', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }), // Corrected here
            });

            if (res.ok) {
                await router.push('/'); // Navigate to home on success
            } else {
                alert('Failed to add course');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred while adding the course.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-2 items-center h-screen'>
            <div>
                <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    type='text' 
                    placeholder='Course Name' 
                    className='text-center mt-30 border w-140 h-20 border-slate-600 flex justify-center' 
                />
                <input 
                    onChange={(e) => setDescription(e.target.value)} 
                    type='text' 
                    placeholder='Course Description' 
                    className='text-center mt-4 border w-140 h-20 border-slate-600 flex justify-center' 
                />
                <button type='submit' className='w-fit bg-blue-500 mt-4 text-white px-4 py-3'>
                    Add Course
                </button>
            </div>
        </form>
    );
};

export default AddCourse;