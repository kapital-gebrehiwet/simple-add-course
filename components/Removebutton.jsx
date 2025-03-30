
'use client'
import React from 'react';
import { HiTrash } from 'react-icons/hi';
import {useRouter} from 'next/navigation'

const RemoveButton = ({ id }) => {
    const router=useRouter();
    const removeCourse = async () => {
        const confirmed = confirm('Are you sure you want to remove this course?');
        if (confirmed) {
            try {
                const res = await fetch(`http://localhost:3000/api/course?id=${id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    alert('Course removed successfully');
                    window.location.reload();  // Reload the page to reflect changes
                } else {
                    alert('Failed to remove course');
                }
            } catch (error) {
                console.log('Error:', error);
                alert('An error occurred while removing the course.');
            }
        }
    };

    return (
        <div>
            <HiTrash onClick={removeCourse} className='text-4xl cursor-pointer hover:text-red-600 transition-colors' />
        </div>
    );
};

export default RemoveButton;