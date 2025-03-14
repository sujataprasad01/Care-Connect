import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import About from './About'
const Navabr = () => {
  return (
    <div className='container flex flex-row justify-between'>
      <div className='flex flex-row m-5'>
        <img src={logo} className='w-16 h-16 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)]'></img>
        <Link to='/'>
      <h2 className='text-2xl mt-7 ml-2 font-semibold drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)]'><span className="text-customPurple">CARE</span> Connect</h2>
      </Link>
      </div>
     
      <div className='m-5'>
      <Link to='/about' className='text-customPurple rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)] m-7 text-lg'>About</Link>
      <Link to='/login'><button className='text-customPurple rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)] m-7 text-lg'>Login</button></Link>
      </div>
    </div>
  )
}

export default Navabr
