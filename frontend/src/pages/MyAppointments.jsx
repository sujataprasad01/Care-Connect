import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Appointments</h2>

      {doctors?.slice(0, 2).map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center border p-4 rounded mb-4 shadow-sm gap-4"
        >
          {/* Doctor Image */}
          <div className="w-24 h-24">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Appointment Info */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-medium text-lg">{item.name}</p>
            <p className="text-sm text-gray-600 mb-1">{item.speciality}</p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Date & Time:</span> 15 April 2025 | 9:30 PM
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-2 md:mt-0">
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
              Pay Online
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyAppointments
