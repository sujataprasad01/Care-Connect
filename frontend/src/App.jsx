import React, {createContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navabr from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import TopDoctors from './components/TopDoctors'
import Gyno from './components/Gyno'
import Neuro from './components/Neuro'
import General from './components/General'
import Derma from './components/Derma'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const AppContext=createContext()

const App = () => {
  // const [token, setToken] = useState(localStorage.getItem('token') || false);
  return (
    <>
    <div className='mx-2 sm:mx-[5%] bg-purple-100'>
      <ToastContainer></ToastContainer>
      <Navabr></Navabr>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/doctors' element={<Doctors></Doctors>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/my-appointment' element={<MyAppointments></MyAppointments>}></Route>
        <Route path='/appointment' element={<TopDoctors></TopDoctors>}></Route>
        <Route path='/gynocologist' element={<Gyno></Gyno>}></Route>
        <Route path='/dermatology' element={<Derma></Derma>}></Route>
        <Route path='/neurological' element={<Neuro></Neuro>}></Route>
        <Route path='/generalphysician' element={<General></General>}></Route>
        <Route path='/appointment/:docId' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
      <Footer></Footer>
    </>
  )
}

export default App
