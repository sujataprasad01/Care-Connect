import React, { useState } from 'react';

const AdminProfile = ({ admin }) => {
  const [adminData, setAdminData] = useState(admin);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="min-h-screen bg-purple-200 text-neutral-200 flex flex-col items-center p-6 ml-9">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
          <div className="flex flex-col items-center">
            <img
              src={adminData.image || '/default-admin.png'}
              alt="Admin Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-neutral-700"
            />
            {isEdit && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setAdminData(prev => ({ ...prev, image: reader.result }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="text-xs text-white mt-2"
              />
            )}
          </div>

          <div className="flex-grow">
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={adminData.name}
                  onChange={(e) =>
                    setAdminData(prev => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
                />
                <input
                  type="email"
                  value={adminData.email}
                  onChange={(e) =>
                    setAdminData(prev => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full p-2 rounded bg-gray-700 text-white"
                />
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold">{adminData.name}</h2>
                <p className="text-neutral-400">{adminData.email}</p>
              </>
            )}

            <div className="mt-4">
              {isEdit ? (
                <button
                  onClick={() => setIsEdit(false)}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl mr-4"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-2xl">{adminData.totalUsers}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold">Reports Handled</h3>
            <p className="text-2xl">{adminData.reportsHandled}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold">System Status</h3>
            <p className="text-green-400 text-lg">All Good ✅</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
