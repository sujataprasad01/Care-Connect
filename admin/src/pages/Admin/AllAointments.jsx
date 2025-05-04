import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const AllAppointments = () => {
  const { getAllAppointments, allAppointments, aToken } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Appointments</h2>
      <div className="overflow-x-auto">
        {allAppointments && allAppointments.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border-b">Patient Name</th>
                <th className="px-4 py-2 border-b">Doctor</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {allAppointments.map((appt) => (
                <tr key={appt._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{appt.user?.name || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{appt.docId?.name || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{new Date(appt.date).toLocaleString()}</td>
                  <td className="px-4 py-2 border-b">{appt.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default AllAppointments;
