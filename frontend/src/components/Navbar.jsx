import React, { useContext} from 'react'
import logo from '../assets/logo.png'
import { useLocation,  Link, useNavigate } from 'react-router-dom'
import profileImg from '../assets/profile.png'
import { AppContext } from '../context/AppContext'
const Navabr = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const {token, setToken}=useContext(AppContext)
    // const [logout, setLogout]=useState(false)
    // const logout = () => {
    //   setToken(false);
    //   localStorage.removeItem('token');
    //   navigate('/login'); // redirect after logout
    // };
    // const handleLogout = () => {
    //     setLogout(true);
    //     setToken(false);
    //   };
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
    <>
      <Link to="/profile">
        <img src={profileImg} className="w-16 h-16 p-2 mt-2 ml-4" />
      </Link>
      {/* <button
        onClick={logout}
        className="text-customPurple rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)] m-7 text-lg"
      >
        Logout
      </button> */}
    </>
  ) : (
    <button
      onClick={() => navigate('/signup')}
      className="text-customPurple rounded-md drop-shadow-[3px_3px_0px_rgba(0,0,0,0.2)] m-7 text-lg cursor-pointer"
    >
      Create Account
    </button>
  )
}
      </div>
    </div>
  </>
  )
}

export default Navabr