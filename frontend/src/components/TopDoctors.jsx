import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext' // Update the path as per your folder structure

const TopDoctors = ({ hideMore = false }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-1">Top Doctors</h1>
      <p className="text-sm text-gray-600 mb-4">Extensive list of trusted doctors.</p>

      {doctors?.length === 0 ? (
        <p className="text-center text-gray-500">No doctors available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {doctors.slice(0, 4).map((doc) => (
            <div
              key={doc._id}
              onClick={() => navigate(`/appointment/${doc._id}`)}
              className="border p-3 rounded cursor-pointer hover:shadow transition duration-200"
            >
              <img
                src={doc.image || 'https://via.placeholder.com/150'} // fallback image
                alt={doc.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <p className="text-green-600 text-sm mb-1">Available</p>
              <p className="text-base font-medium">{doc.name}</p>
              <p className="text-sm text-gray-500">{doc.speciality}</p>
            </div>
          ))}
        </div>
      )}

{!hideMore && (
  <div className="mt-6 text-center">
    <button
      onClick={() => navigate('/doctors')}
      className="px-4 py-1 border rounded text-sm cursor-pointer hover:bg-gray-100 transition"
    >
      More
    </button>
  </div>
)}

    </div>
  )
}

export default TopDoctors
