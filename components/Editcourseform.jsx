"use client"

import React from 'react'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
const Editcourseform = ({id,title,description}) => {
  const router=useRouter();
  const[newTitle, setNewTitle] =useState(title)
  const[newDescription, setNewDescription] = useState(description)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res=await fetch(`http://localhost:3000/api/course/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      console.log(res)
      router.push('/')
      
    } catch (error) {
      
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col  space-y-2 items-center h-screen'>
        <div>
            <input onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} type='text' placeholder='update course' className='text-center mt-30 border w-140 h-20 items-centerborder-slate-600 flex justify-center ' />
            <input onChange={(e)=>setNewDescription(e.target.value)} value={newDescription}type='text' placeholder='update course' className='text-center mt-4 border w-140 h-20 items-centerborder-slate-600 flex justify-center ' />
            <button type='submit' className='w-fit bg-blue-500 mt-4 text-white px-4 py-3'>update course</button>
        </div>



    </form>
  )
}

export default Editcourseform
