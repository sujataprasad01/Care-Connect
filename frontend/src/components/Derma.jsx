import React from 'react'
import { useNavigate } from 'react-router-dom'
import doctor from '../assets/doctor.png'

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Priya Sharma',
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '7 years',
    about: 'Expert in treating acne, eczema, and hair loss.',
    fee: 'Rs 800',
    image: doctor
  },
  {
    _id: 'doc2',
    name: 'Dr. Rohan Mehta',
    speciality: 'Dermatologist',
    degree: 'MBBS, DDVL',
    experience: '6 years',
    about: 'Skilled in cosmetic dermatology and skin rejuvenation.',
    fee: 'Rs 1000',
    image: doctor
  },
  {
    _id: 'doc3',
    name: 'Dr. Kavita Singh',
    speciality: 'Dermatologist',
    degree: 'MBBS, DNB (Skin & VD)',
    experience: '9 years',
    about: 'Specializes in chronic skin disorders and pigmentation treatment.',
    fee: 'Rs 900',
    image: doctor
  },
  {
    _id: 'doc4',
    name: 'Dr. Anil Kapoor',
    speciality: 'Dermatologist',
    degree: 'MBBS, PG Diploma in Dermatology',
    experience: '5 years',
    about: 'Focused on treating fungal infections and psoriasis.',
    fee: 'Rs 750',
    image: doctor
  }
]

const Derma = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-1">Top Dermatologists</h1>
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

      {/* <div className="mt-6 text-center">
        <button
          onClick={() => { navigate('/doctors') }}
          className="px-4 py-1 border rounded text-sm cursor-pointer hover:bg-gray-100 transition"
        >
          More
        </button>
      </div> */}
    </div>
  )
}

export default Derma
