import React, { useContext, useEffect } from 'react';
import DoctorsList from './DoctorsList';
import { AdminContext } from '../../context/AdminContext';

const Dashboard = () => {
  const { doctors, getAllDoctors, aToken } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="p-6 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Manage doctors, appointments, and users</p>
      </div>

      {/* Stats Section */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="bg-white p-4 shadow rounded-xl">
          <h3 className="text-lg font-semibold text-gray-700">Total Doctors</h3>
          <p className="text-2xl text-indigo-600">{doctors?.length || 0}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h3 className="text-lg font-semibold text-gray-700">Appointments</h3>
          <p className="text-2xl text-indigo-600">--</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h3 className="text-lg font-semibold text-gray-700">Patients</h3>
          <p className="text-2xl text-indigo-600">--</p>
        </div>
      </div>

      {/* Doctors Section */}
      <div>
        <DoctorsList />
      </div>
    </div>
  );
};

export default Dashboard;
