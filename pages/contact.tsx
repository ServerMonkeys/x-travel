import React from 'react'
import Link from 'next/link'

function contact() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <form action="https://submit-form.com/KuaUyBo0">
          <div className='text-3xl font-bold text-center'>Contact</div>
          <div className='bg-white w-96 p-6 rounded shadow-sm'>
            <label htmlFor="name">Name</label>
            <input 
              className='w-full py-2 bg-gray-50 text-gray500 px-1 outline-none mb-4'
              type="text" id="name" name="name" placeholder="Name" required 
            />
            <label htmlFor="email">Email</label>
            <input 
              className='w-full py-2 bg-gray-50 text-gray500 px-1 outline-none mb-4'
              type="email" id="email" name="email" placeholder="Email" required 
            />
            <label htmlFor="message">Message</label>
            <textarea
              className='w-full py-2 bg-gray-50 text-gray500 px-1 outline-none mb-4'
                id="message"
                name="message"
                placeholder="Message"
                required
            ></textarea>
            <button
            className='bg-blue-500 w-full text-white py-2 rounded hover:bg-blue-600 transition-colors'
            type="submit">Send</button>
          </div>
        </form>
        <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}

export default contact