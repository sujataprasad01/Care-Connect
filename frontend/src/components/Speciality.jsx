import React from 'react'
import { Link } from 'react-router-dom'
import gyno from '../assets/gyno.png'
import general from '../assets/general.png'
import derma from '../assets/derma.png'
import neurological from '../assets/neurological.png'

const Speciality = () => {
  return (
    <div className="mt-20 mb-28 px-4 text-center">
      {/* Section Heading */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Specialities</h2>
        <p className="text-sm sm:text-base text-gray-600">
          Find the right doctor based on your needs
        </p>
      </div>

      {/* Speciality Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <Link to="/gynocologist">
            <img src={gyno} alt="Gynocologist" className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg shadow-md mb-2" />
          </Link>
          <p className="text-sm sm:text-base font-medium text-gray-700">Gynocologist</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <Link to="/generalphysician">
            <img src={general} alt="General Physician" className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg shadow-md mb-2" />
          </Link>
          <p className="text-sm sm:text-base font-medium text-gray-700">General Physician</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <Link to="/dermatology">
            <img src={derma} alt="Dermatology" className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg shadow-md mb-2" />
          </Link>
          <p className="text-sm sm:text-base font-medium text-gray-700">Dermatology</p>
        </div>

        <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <Link to="/neurological">
            <img src={neurological} alt="Neurological" className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg shadow-md mb-2" />
          </Link>
          <p className="text-sm sm:text-base font-medium text-gray-700">Neurological</p>
        </div>
      </div>
    </div>
  )
}

export default Speciality
