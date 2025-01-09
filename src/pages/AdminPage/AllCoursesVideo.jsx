import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import AdminNavbar from "./AdminNavbar";
import app from "../../firebase"; // Ensure the correct Firebase configuration file is imported

// Initialize Firestore
const db = getFirestore(app);

function AllCoursesVideo() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch courses from Firestore
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "course topic"));
        const fetchedCourses = [];
        querySnapshot.forEach((doc) => {
          fetchedCourses.push({ id: doc.id, ...doc.data() });
        });
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <h1 className="text-xl font-semibold underline p-4 pt-20">All Courses Video</h1>
      <div className="flex justify-center items-center">
      {loading ? (
        <p className="text-center text-gray-500">Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {courses.map((course) => (
            <Link to={`/particuler_courses_video/${course.id}`} key={course.id}>
            <div className="border-2 border-indigo-500 w-80 p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={course.imageURL || "https://via.placeholder.com/150"}
                  alt={`${course.title} course`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="px-3 py-2">
                  <h1 className="text-lg font-semibold text-gray-800">
                    {course.title}
                  </h1>
                  <p className="text-sm text-gray-600">{course.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default AllCoursesVideo;
