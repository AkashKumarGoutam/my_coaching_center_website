import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="mt-16">
      {/* Main Navbar */}
      <div className="flex w-full fixed justify-between bg-indigo-600 p-4 text-gray-100 z-0">
        <div className="flex gap-3 items-center">
          <h1 className="text-xl font-semibold underline">Admin Panel</h1>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex gap-6">
          <Link to="/dashboard" className="hover:underline">
            All Courses Topic
          </Link>
          <Link to="/all_courses_video" className="hover:underline">
            All Courses Video
          </Link>
          <Link to="/add_courses_topic" className="hover:underline">
            Add Course Topic
          </Link>
          <Link to="/add_courses_video_page" className="hover:underline">
            Add Course Video
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay */}
          <div
            className="bg-black bg-opacity-50 w-full"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar content */}
          <div className="bg-indigo-600 text-gray-100 w-[90%] p-4 flex flex-col gap-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-xl pb-4 self-end focus:outline-none"
            >
              ×
            </button>
            <Link
              to="/dashboard"
              className="hover:underline"
              onClick={() => setIsSidebarOpen(false)}
            >
              All Courses Topic
            </Link>
            <Link
              to="/all_courses_video"
              className="hover:underline"
              onClick={() => setIsSidebarOpen(false)}
            >
              All Courses Video
            </Link>
            <Link
              to="/add_courses_topic"
              className="hover:underline"
              onClick={() => setIsSidebarOpen(false)}
            >
              Add Course Topic
            </Link>
            <Link
              to="/add_courses_video_page"
              className="hover:underline"
              onClick={() => setIsSidebarOpen(false)}
            >
              Add Course Video
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminNavbar;
