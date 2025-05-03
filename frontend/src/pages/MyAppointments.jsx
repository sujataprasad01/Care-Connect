import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify';
import axios from 'axios'

const MyAppointments = () => {
  const { doctors, getDoctorsData , backendUrl, token } = useContext(AppContext)
  const [appointments, setAppointment]=useState([])
const getUserAppointments=async()=>{
  try {
    const {data}=await axios.get(backendUrl+'/api/user/appointments', {headers:{token}})
    if(data.success){
      setAppointment(data.appointments.reverse())
      console.log(data.appointments)
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message)
  }
}
  const cancelAppointment=async(appointmentId)=>{
    try {
      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', 
        { appointmentId }, 
        { headers: { token } }   // ✅ Correct
      )      
      if(data.success){
     toast.success(data.message)
     getUserAppointments()
     getDoctorsData()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const initPay=(order)=>{
   const options={
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount:order.amount,
    currency:order.currency,
    name:'Appointment Payment',
    description:'Payment for appointment',
    order_id:order.id,
    receipt:order.receipt,
    handler:async(response)=>{
      console.log(response)
    }
   }

   const rzp=new window.Razorpay(options)
   rzp.open()
  }
  const appointmentRazorpay=async(appointmentId)=>{
try {
  const {data}=await axios.post(backendUrl+'/api/user/payment-razorpay', {appointmentId}, {headers:{token}})
  if(data.success){
    console.log(data.order)
    initPay(data.order)
  }
} catch (error) {
  console.log(error);
  toast.error(error.message)
}
  }
  useEffect(()=>{
    if(token){
      getUserAppointments()
    }
  }, [token])
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Appointments</h2>

      {appointments.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center border p-4 rounded mb-4 shadow-sm gap-4"
        >
          {/* Doctor Image */}
          <div className="w-24 h-24">
            <img
              src={item.docData.image}
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Appointment Info */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-medium text-lg">{item.docData.name}</p>
            <p className="text-sm text-gray-600 mb-1">{item.docData.speciality}</p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Date & Time:</span> 15 April 2025 | 9:30 PM
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-2 md:mt-0">
          {!item.cancelled && <button onClick={()=>appointmentRazorpay(item._id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
              Pay Online
            </button>}
            {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
              Cancel
            </button>}
            {item.cancelled && <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Appointment Cancelled</button>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyAppointments
