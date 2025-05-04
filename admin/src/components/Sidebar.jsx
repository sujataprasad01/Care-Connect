import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import appointment from '../assets/appointment.png';
import doctorsList from '../assets/DList.png';
import addDoctors from '../assets/addDoctors.png';
import dashboard from '../assets/dashboard.png';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="w-60 h-screen text-black p-4  border-r-2 border-gray-400">
      {aToken && (
        <ul className="space-y-4">
          <NavLink
            to="/admin-dashboard"
            className={({isActive})=>`${isActive?'bg-violet-300 border-r-4':''} flex items-center gap-4 p-2 rounded-lg hover:bg-violet-300 transition-colors`}
          >
            <img src={dashboard} alt="Dashboard" className="w-6 h-6" />
            <p className="text-base">Dashboard</p>
          </NavLink>

          <NavLink
            to="/all-appointments"
            className={({isActive})=>`${isActive?'bg-violet-400 border-r-4':''} flex items-center gap-4 p-2 rounded-lg hover:bg-violet-300 transition-colors`}
          >
            <img src={appointment} alt="Appointment" className="w-6 h-6" />
            <p className="text-base">Appointment</p>
          </NavLink>

          <NavLink
            to="/add-doctor"
            className={({isActive})=>`${isActive?'bg-violet-400 border-r-4':''} flex items-center gap-4 p-2 rounded-lg hover:bg-violet-300 transition-colors`}
          >
            <img src={addDoctors} alt="Add Doctor" className="w-6 h-6" />
            <p className="text-base">Add Doctor</p>
          </NavLink>

          <NavLink
            to="/doctors-list"
            className={({isActive})=>`${isActive?'bg-violet-400 border-r-4':''} flex items-center gap-4 p-2 rounded-lg hover:bg-violet-300 transition-colors`}
          >
            <img src={doctorsList} alt="Doctors List" className="w-6 h-6" />
            <p className="text-base">Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
