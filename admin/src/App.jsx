import React,{useContext} from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard';
import AllAointments from './pages/Admin/AllAointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import Sidebar from './components/Sidebar';
import AdminProfile from './components/AdminProfile';
const dummyAdmin = {
  name: 'Sujata Prasad',
  email: 'admin@example.com',
  image: 'https://via.placeholder.com/150', // Or your base64 string
  totalUsers: 245,
  reportsHandled: 73,
};
const App = () => {
  const {aToken}=useContext(AdminContext)
  
  return aToken ?(
    <div className='mx-2 sm:mx-[5%] bg-purple-100'>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <div className='flex'>
      <Sidebar></Sidebar>
      {/* <AddDoctor></AddDoctor> */}
      
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/admin-dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/all-appointments' element={<AllAointments></AllAointments>}></Route>
        <Route path='/add-doctor' element={<AddDoctor></AddDoctor>}></Route>
        <Route path='/doctors-list' element={<DoctorsList></DoctorsList>}></Route>
        <Route path='/profile' element={<AdminProfile admin={dummyAdmin} />} />
      </Routes>
    </div>
    </div>

  ):(
    <>
     <Login></Login>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
