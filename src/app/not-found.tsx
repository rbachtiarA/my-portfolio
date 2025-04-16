import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center mt-4'>
        <h1 className='text-4xl font-bold text-center'>404 - Page Not Found</h1>
        <p className='text-center mt-4'>Sorry, the page you are looking for does not exist.</p>
        <p className='text-center mt-2'>Please check the URL or return to the homepage.</p>
    </div>
  )
}
