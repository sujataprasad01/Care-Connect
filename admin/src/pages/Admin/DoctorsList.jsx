import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <>
    <div className="p-4 flex-col justify-center">
        <div className='w-full'>
      <h2 className="text-2xl font-semibold mb-4">Doctors List</h2>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {doctors && doctors.length > 0 ? (
          doctors.map((doc) => (
            <div
              key={doc._id}
              className="border-gray-400 p-4 rounded-xl shadow-md border flex items-center space-x-4"
            >
              <img
                src={doc.image || 'https://via.placeholder.com/80'}
                alt={doc.name}
                className="w-36 h-36 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-800">{doc.name}</h3>
                <p className="text-sm text-gray-600">{doc.speciality}</p>
                <p className="text-sm text-gray-500">{doc.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No doctors available.</p>
        )}
      </div>
    </div>
    </>
  )
}

export default DoctorsList
