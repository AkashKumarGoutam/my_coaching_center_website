import React from "react";

function UserProfile() {
  return (
   <div className="py-20 bg-gray-100">
    <h1 className="text-xl flex justify-center font-semibold">Student Profile</h1>
     <div className=" flex flex-col items-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150" // Replace with user's profile image URL
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600"
            />
            <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-2.036a2.5 2.5 0 113.536 3.536L9 21H5v-4L16.732 7.268z"
                />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Username</span>
            <span className="text-gray-800">johndoe</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Phone</span>
            <span className="text-gray-800">+123 456 7890</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Address</span>
            <span className="text-gray-800">1234 Elm Street, Cityville</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Role</span>
            <span className="text-gray-800">Administrator</span>
          </div>
        </div>

        {/* Edit and Logout Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
            Edit Profile
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
   </div>
  );
}

export default UserProfile;
