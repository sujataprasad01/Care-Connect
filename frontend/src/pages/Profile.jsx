import React, { useState, useContext } from 'react';
import sujataPic from '../assets/sujataPic.jpg';
import MyAppointments from './MyAppointments';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { token, setToken } = useContext(AppContext);  // Ensure that setToken is available from context
  const navigate = useNavigate();
  const {userData, setUserData}=useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false);

  const logout = () => {
    setToken(false);  // Ensure that setToken is defined in the context
    localStorage.removeItem('token');
    navigate('/login'); // redirect after logout
  };

  return userData &&(
    <>
      <div className='flex'>
        <div className="w-xl dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 p-4 rounded-xl shadow-md space-y-6 text-sm m-12 border">
        {isEdit ? (
  <div className="flex flex-col items-center space-y-2">
    <img
      src={userData.image}
      className="w-32 h-32 rounded-xl object-cover"
      alt="Profile"
    />
    <input
      type="file"
      accept="image/*"
      onChange={(e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setUserData(prev => ({ ...prev, image: reader.result }));
          };
          reader.readAsDataURL(file);
        }
      }}
      className="text-sm text-neutral-600 dark:text-neutral-300"
    />
  </div>
) : (
  <img
    src={userData.image}
    className="w-32 h-32 rounded-xl object-cover mx-auto"
    alt="Profile"
  />
)}


          {isEdit ? (
            <input
              type='text'
              value={userData.name}
              onChange={e =>
                setUserData(prev => ({ ...prev, name: e.target.value }))
              }
              className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 outline-none"
            />
          ) : (
            <p className="text-center text-lg font-semibold">{userData.name}</p>
          )}

          <div>
            <p className="text-neutral-500 uppercase tracking-wide text-xs mb-2">Contact Information</p>
            <div className="space-y-2">
              <div>
                <p className="text-neutral-400">Email ID:</p>
                <p>{userData.email}</p>
              </div>

              <div>
                <p className="text-neutral-400">Phone:</p>
                {isEdit ? (
                  <input
                    type='text'
                    value={userData.phone}
                    onChange={e =>
                      setUserData(prev => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 outline-none"
                  />
                ) : (
                  <p>{userData.phone}</p>
                )}
              </div>

              <div>
                <p className="text-neutral-400">Address:</p>
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      value={userData.address.line1}
                      onChange={(e) =>
                        setUserData(prev => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line1: e.target.value
                          }
                        }))
                      }
                      className="w-full p-2 mb-2 rounded bg-neutral-100 dark:bg-neutral-800 outline-none"
                    />
                    <input
                      type="text"
                      value={userData.address.line2}
                      onChange={(e) =>
                        setUserData(prev => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line2: e.target.value
                          }
                        }))
                      }
                      className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 outline-none"
                    />
                  </>
                ) : (
                  <p>
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-neutral-500 uppercase tracking-wide text-xs mb-2">Basic Information</p>
            <div className="space-y-2">
              <div>
                <p className="text-neutral-400">Gender:</p>
                {isEdit ? (
                  <select
                    value={userData.gender}
                    onChange={(e) =>
                      setUserData(prev => ({ ...prev, gender: e.target.value }))
                    }
                    className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p>{userData.gender}</p>
                )}
              </div>

              <div>
                <p className="text-neutral-400">Birthday:</p>
                {isEdit ? (
                  <input
                    type='date'
                    value={userData.dob}
                    onChange={(e) =>
                      setUserData(prev => ({ ...prev, dob: e.target.value }))
                    }
                    className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 outline-none"
                  />
                ) : (
                  <p>{userData.dob}</p>
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            {isEdit ? (
              <button
                onClick={() => setIsEdit(false)}
                className="bg-violet-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:opacity-90 transition"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="bg-violet-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:opacity-90 transition"
              >
                Edit
              </button>
            )}
            <button
              onClick={logout}
              className="bg-violet-900 text-white dark:bg-white dark:text-black px-4 ml-6 py-2 rounded hover:opacity-90 transition"
            >
              Logout
            </button>
          </div>
        </div>

        <div>
          <MyAppointments />
        </div>
      </div>
    </>
  );
};

export default Profile;
