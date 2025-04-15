import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    // Add signup logic here
    console.log(form)
    navigate('/')
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={handleSignup} className='border-2 border-gray-400 rounded-lg shadow-md p-8 w-full max-w-md bg-white'>
        <h2 className='text-2xl font-semibold text-center text-violet-900 mb-6'>Sign Up</h2>

        <div className='mb-4'>
          <label className='block mb-1 text-gray-700'>Name</label>
          <input
            type='text'
            name='name'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900'
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block mb-1 text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900'
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block mb-1 text-gray-700'>Password</label>
          <input
            type='password'
            name='password'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900'
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type='submit'
          className='w-full py-2 px-4 bg-violet-900 text-white rounded-lg hover:bg-[#7F52E6] transition'
        >
          Sign Up
        </button>

        <p className='text-sm text-center mt-4'>
          Already have an account? <span onClick={() => navigate('/login')} className='text-violet-900 cursor-pointer hover:text-[#7F52E6] underline'>Login</span>
        </p>
      </form>
    </div>
  )
}

export default Signup
