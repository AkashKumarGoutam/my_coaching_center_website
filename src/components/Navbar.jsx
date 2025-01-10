import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import app from "../firebase";

// Initialize Firestore
const db = getFirestore(app);

function Navbar() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const LOGOUT_TIME_MS = 30 * 60 * 1000; // 30 minutes in milliseconds

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));
    const loginTime = localStorage.getItem("loginTime");

    if (storedUser || storedAdmin) {
      const currentTime = Date.now();
      if (
        loginTime &&
        currentTime - parseInt(loginTime, 10) >= LOGOUT_TIME_MS
      ) {
        handleLogout();
      } else {
        setUser(storedUser);
        setAdmin(storedAdmin);

        // Auto logout after remaining time
        const timeout = setTimeout(() => {
          handleLogout();
        }, LOGOUT_TIME_MS - (currentTime - parseInt(loginTime, 10)));
        return () => clearTimeout(timeout);
      }
    }
  }, [navigate]);

  const handleLoginTime = () => {
    localStorage.setItem("loginTime", Date.now().toString());
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    localStorage.removeItem("loginTime");
    setUser(null);
    setAdmin(null);
    setIsDropdownOpen(false);
    alert("Logged out successfully!");
    navigate("/");
  };

  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <div className="shadow-lg fixed w-full bg-white z-50">
      <div className="flex justify-between items-center text-gray-700 px-4 lg:px-12 py-3">
        <div>
          <h1 className="text-xl font-bold">MAG Coaching Center</h1>
          <p className="text-xs text-yellow-500">Make life easy with us</p>
        </div>
        <div className="lg:hidden">
          {/* Hamburger Menu */}
          <button className="text-3xl" onClick={() => setIsSidebarOpen(true)}>
            ☰
          </button>
        </div>
        <div className="hidden lg:flex items-center text-lg gap-6 font-semibold">
          {admin ? (
            <Link
              to="/dashboard"
              onClick={() => setActiveLink("/dashboard")}
              className={`transition duration-300 ${
                activeLink === "/dashboard"
                  ? "bg-blue-600 px-2 text-white rounded-lg"
                  : ""
              }`}
            >
              Admin Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/"
                onClick={() => setActiveLink("/")}
                className={`transition duration-300 ${
                  activeLink === "/"
                    ? "bg-blue-600 px-2 text-white rounded-lg"
                    : ""
                }`}
              >
                Home
              </Link>

              <Link
                to="/questions_and_answers"
                onClick={() => setActiveLink("/questions_and_answers")}
                className={`transition duration-300 ${
                  activeLink === "/questions_and_answers"
                    ? "bg-blue-600 px-2 text-white rounded-lg"
                    : ""
                }`}
              >
                Q&A
              </Link>

              <Link
                to="/ask_query"
                onClick={() => setActiveLink("/ask_query")}
                className={`transition duration-300 ${
                  activeLink === "/ask_query"
                    ? "bg-blue-600 px-2 text-white rounded-lg"
                    : ""
                }`}
              >
                Ask Query
              </Link>
              <Link
                to="/about_us"
                onClick={() => setActiveLink("/about_us")}
                className={`transition duration-300 ${
                  activeLink === "/about_us"
                    ? "bg-blue-600 px-2 text-white rounded-lg"
                    : ""
                }`}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                onClick={() => setActiveLink("/courses")}
                className={`transition duration-300 ${
                  activeLink === "/courses"
                    ? "bg-blue-600 px-2 text-white rounded-lg"
                    : ""
                }`}
              >
                Courses
              </Link>
            </>
          )}
          {user || admin ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-indigo-500">
                  {user?.displayName || admin?.email || "User"}
                </span>
                <img
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50"
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                    onClick={closeDropdown}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:underline hover:text-gray-600 transition duration-300"
                onClick={handleLoginTime}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:underline hover:text-gray-600 transition duration-300 border-2 border-indigo-500 text-indigo-500 px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-64 h-full shadow-lg">
            <button
              className="text-2xl p-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              ×
            </button>
            <div className="flex flex-col p-4 gap-4">
              {admin ? (
                <Link
                  to="/dashboard"
                  className="hover:underline text-lg"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Admin Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/"
                    className="hover:underline text-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/questions_and_answers"
                    className="hover:underline text-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Q&A
                  </Link>
                  <Link
                    to="/ask_query"
                    className="hover:underline text-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Ask Query
                  </Link>
                  <Link
                    to="/about_us"
                    className="hover:underline text-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/courses"
                    className="hover:underline text-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Courses
                  </Link>
                </>
              )}
              {user || admin ? (
                <>
                  <Link
                    to="/profile"
                    className="hover:underline text-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="text-left text-lg">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hover:underline text-lg"
                    onClick={() => {
                      handleLoginTime();
                      setIsSidebarOpen(false);
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="hover:underline text-lg"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
