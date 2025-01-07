import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import app from "../firebase";

// Initialize Firestore
const db = getFirestore(app);

function Navbar() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to dropdown menu
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsDropdownOpen(false); // Close dropdown after logout
    alert("Logged out successfully!");
    navigate("/");
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Close dropdown
  };

  return (
    <div className="shadow-lg fixed w-full bg-white z-50">
      <div className="flex justify-between items-center text-gray-700 px-10 lg:px-20 py-3">
        <div>
          <h1 className="text-xl font-bold">MAG Center</h1>
          <p className="text-xs text-yellow-500">Make life easy with us</p>
        </div>
        <div className="flex items-center text-lg gap-6 font-semibold">
          <Link to="/" className="hover:underline hover:text-gray-600 transition duration-300">Home</Link>
          <Link to="/" className="hover:underline hover:text-gray-600 transition duration-300">PYQ</Link>
          <Link to="/" className="hover:underline hover:text-gray-600 transition duration-300">Contact</Link>

            <Link to="/courses" className="hover:underline hover:text-gray-600 transition duration-300">Courses</Link>
      
          
          {user ? (
            <div className="relative">
              {/* User Logo (can be an avatar or any icon) */}
              <button onClick={() => setIsDropdownOpen((prev) => !prev)} className="flex items-center gap-2 cursor-pointer">
                <span className="text-indigo-500">{user.displayName || "User"}</span>
                <img
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" // Replace with actual user avatar if available
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full"
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  ref={dropdownRef} // Attach ref to dropdown menu
                  className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                    onClick={closeDropdown} // Close dropdown on click
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout} // Close dropdown and logout
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:underline hover:text-gray-600 transition duration-300">Login</Link>
              <Link to="/register" className="hover:underline hover:text-gray-600 transition duration-300 border-2 border-indigo-500 text-indigo-500 px-3 py-1 rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;