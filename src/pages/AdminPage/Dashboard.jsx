import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import app from "../../firebase"; // Ensure Firebase app is initialized
import AdminNavbar from "./AdminNavbar";

function Dashboard() {
  const [courses, setCourses] = useState([]); // State to store courses
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [loading, setLoading] = useState(true); // State for loading status
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const db = getFirestore(app);
        const coursesCollection = collection(db, "course topic");
        const querySnapshot = await getDocs(coursesCollection);

        const coursesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCourses(coursesList); // Set the courses state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching courses:", error);
        alert("Error fetching courses. Please try again.");
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchCourses();
  }, []);

  // Handle delete action
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      try {
        const db = getFirestore(app);
        const courseDoc = doc(db, "course topic", id);
        await deleteDoc(courseDoc);

        // Update the UI after deletion
        setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
        alert("Course deleted successfully!");
      } catch (error) {
        console.error("Error deleting course:", error);
        alert("Failed to delete the course. Please try again.");
      }
    }
  };

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminNavbar />
      <div>
        <div className="flex justify-between px-12 pt-20 py-4">
          <h1 className="font-semibold py-3 underline">All Courses Topic</h1>
          <div className="flex">
            <div className="bg-indigo-600 px-2 py-1 text-gray-100 flex justify-center items-center">
              <h1>Search</h1>
            </div>
            <input
              placeholder="Search course topics"
              className="border border-gray-300 px-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            />
          </div>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center py-2">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-4 border-indigo-600"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          // Displaying the list of course topics
          <div className="flex justify-center items-center py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="border-2 border-indigo-500 w-80 p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={course.imageURL}
                    alt={`${course.title} course`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="flex justify-between items-center">
                    <div className="px-3 py-2">
                      <h1 className="text-lg font-semibold text-gray-800">{course.title}</h1>
                      <p className="text-sm text-gray-600">{course.description}</p>
                    </div>
                    <div className="flex gap-2">
                      {/* Navigate to Edit page with course ID */}
                      <button
                        onClick={() => navigate(`/edit_courses_topic/${course.id}`)}
                        className="bg-indigo-600 px-2 py-1 text-white rounded-sm hover:bg-indigo-500 transition duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course.id)} // Trigger delete handler
                        className="bg-red-600 px-2 py-1 text-white rounded-sm hover:bg-red-500 transition duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
