import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex h-20 justify-between bg-slate-600 px-7 px-4'>
          <Link href="/" className='items-center justify-center text-white flex text-2xl hover:text-slate-400'>COURSE APP</Link>
          <Link href='/addcourse' className='justify-center items-center px-3 py-3 mt-3 mb-3 text-white flex bg-blue-500 text-2xl hover:text-slate'>Add Course</Link>
    </div>
  )
}

export default Navbar
