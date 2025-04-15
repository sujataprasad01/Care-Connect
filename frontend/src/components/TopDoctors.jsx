import React from 'react'
import { useNavigate } from 'react-router-dom'
import doctor from '../assets/doctor.png'

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Sunita James',
    speciality: 'General Physician',
    degree:'MBBS',
    experience:'3 years',
    about:'Having 3 years of experience',
    fee:"Rs 1000",
    image: doctor
  },
  {
    _id: 'doc2',
    name: 'Dr. Nill Joseph',
    speciality: 'Dermatologist',
    degree:'MBBS',
    experience:'3 years',
    about:'Having 3 years of experience',
    fee:"Rs 1000",
    image: doctor
  },
  {
    _id: 'doc3',
    name: 'Dr. Ramesh Kumar',
    speciality: 'Gynecologist',
    degree:'MBBS',
    experience:'3 years',
    about:'Having 3 years of experience',
    fee:"Rs 1000",
    image: doctor
  },
  {
    _id: 'doc4',
    name: 'Dr. Sneha Verma',
    speciality: 'Neurological',
    experience:'3 years',
    about:'Having 3 years of experience',
    fee:"Rs 1000",
    degree:'MBBS',
    image: doctor
  }
]

const TopDoctors = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-1">Top Doctors</h1>
      <p className="text-sm text-gray-600 mb-4">Extensive list of trusted doctors.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {doctors.map((doc) => (
          <div
            key={doc._id}
            onClick={() => navigate(`/appointment/${doc._id}`)}
            className="border p-3 rounded cursor-pointer hover:shadow transition duration-200"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <p className="text-green-600 text-sm mb-1">Available</p>
            <p className="text-base font-medium">{doc.name}</p>
            <p className="text-sm text-gray-500">{doc.speciality}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button onClick={()=>{navigate('/doctors')}} className="px-4 py-1 border rounded text-sm cursor-pointer hover:bg-gray-100 transition">More</button>
      </div>
    </div>
  )
}

export default TopDoctors
