import React,{useContext} from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
const App = () => {
  const {aToken}=useContext(AdminContext)

  return aToken ?(
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
    </div>
  ):(
    <>
     <Login></Login>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
