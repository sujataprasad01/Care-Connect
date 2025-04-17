import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, setState] = useState('Admin')
    const navigate = useNavigate()
    const {setAToken, backendUrl}=useContext(AdminContext)

    const handleLogin = async (e) => {
        e.preventDefault()
        // Add login logic here
        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('aToken',data.token);
                    setAToken(data.token)
                }else{
                    toast.error("Invalid Credentials")
                }
            } else {

            }

        } catch (error) {

        }
        console.log({ email, password })
        navigate('/') // or wherever
    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handleLogin} className='border-2 border-gray-400 rounded-lg shadow-md p-8 w-full max-w-md bg-white'>
                <h2 className='text-2xl font-semibold text-center text-violet-900 mb-6'><span>{state} </span>Login</h2>

                <div className='mb-4'>
                    <label className='block mb-1 text-gray-700'>Email</label>
                    <input
                        type='email'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className='mb-6'>
                    <label className='block mb-1 text-gray-700'>Password</label>
                    <input
                        type='password'
                        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type='submit'
                    className='w-full py-2 px-4 bg-violet-900 text-white rounded-lg hover:bg-[#7F52E6] transition'
                >

                    Login
                </button>
                {
                    state === 'Admin'
                        ? <p>Doctor Login? <span className='cursor-pointer underline' onClick={() => setState('Doctor')}>Click here</span></p>
                        : <p>Admin Login?  <span className='cursor-pointer underline' onClick={() => setState('Admin')}>Click here</span></p>
                }
                {/* <p className='text-sm text-center mt-4'>
          Don't have an account? <span onClick={() => navigate('/signup')} className='text-violet-900 cursor-pointer hover:text-[#7F52E6] underline'>Sign Up</span>
        </p> */}
            </form>
        </div>
    )
}

export default Login
