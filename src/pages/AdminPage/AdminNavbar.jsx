import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminNavbar() {
  const navigate = useNavigate();

//   const handleLogout = () => {
//     // Clear the admin data from localStorage
//     localStorage.removeItem('admin');
    
//     // Redirect to the login page after logout
//     navigate('/login');
//   };

  return (
    <div className="mt-16">
      <div className="flex justify-between bg-indigo-600 p-4 text-gray-100">
        <div className="flex gap-3">
          <h1 className="text-xl font-semibold underline">Admin Panel</h1>
          {/* <button
            onClick={handleLogout}
            className="bg-gray-100 py-1 hover:text-indigo-700 font-semibold px-2 rounded-lg text-black"
          >
            Logout
          </button> */}
        </div>
        <div className="flex gap-6">
          <Link to="/dashboard" className="hover:underline">
            All Courses Topic
          </Link>
          <Link to="/all_courses_video" className="hover:underline">
            All Courses Video
          </Link>
          <Link to="/add_courses_topic" className="hover:underline">
            Add Course Topic
          </Link>
          <Link to="/add_courses_video" className="hover:underline">
            Add Course Video
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
