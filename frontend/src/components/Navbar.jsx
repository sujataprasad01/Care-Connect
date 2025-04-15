import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useLocation,  Link, useNavigate } from 'react-router-dom'
import profileImg from '../assets/profile.png'
const Navabr = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const [showMenu, setShowMenu]=useState(false)
    const[token, setToken]=useState(true)
    const [logout, setLogout]=useState(false)
    
    const handleLogout = () => {
        setLogout(true);
        setToken(false);
      };
  return (
  <>
   <div className='container flex flex-row justify-between pl-16 pr-16'>
      <div className='flex flex-row m-5'>
        <img src={logo} className='w-16 h-16 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)]'></img>
        <Link to='/'>
      <h2 className='text-2xl mt-7 ml-2 font-semibold drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)]'><span className="text-customPurple">CARE</span> Connect</h2>
      </Link>
      </div>
     
      <div className='m-5 flex'>
      <Link to='/about' className='text-customPurple rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)] m-7 text-lg'>About</Link>

      {
    token ? (
        location.pathname === '/profile' ? (
            <div onClick={handleLogout} className='text-customPurple rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)] m-7 text-lg'><Link to='/login'>Logout</Link></div>
        ) : (
            <div><Link to='/profile'><img src={profileImg} className='w-16 h-16 p-2 mt-2 ml-4'></img></Link></div>)
    ) : (
        <button onClick={() => navigate('/login')}
            className='text-customPurple rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)] m-7 text-lg'>Login</button>
    )
}
      </div>
    </div>
  </>
  )
}

export default Navabr