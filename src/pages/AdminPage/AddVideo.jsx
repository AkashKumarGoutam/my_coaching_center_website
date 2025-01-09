import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import app from "../../firebase"; // Firebase initialization
import AdminNavbar from "./AdminNavbar";

function AddVideo() {
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate();
  const db = getFirestore(app);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [videoName, setVideoName] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [existingVideos, setExistingVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, "course topic", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const courseData = docSnap.data();
          setTitle(courseData.title || "");
          setDescription(courseData.description || "");
          setImageURL(courseData.imageURL || "");
          setExistingVideos(courseData.videos || []);
        } else {
          alert("Course not found");
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
        alert("Error fetching course details.");
      }
    };

    fetchCourse();
  }, [id, db, navigate]);

  const handleUpdate = async () => {
    if (!title || !description || !imageURL) {
      alert("All fields are required.");
      return;
    }

    if (!videoName || !videoURL) {
      alert("Video name and URL are required.");
      return;
    }

    setLoading(true);
    try {
      const docRef = doc(db, "course topic", id);

      // Append the new video data to existing videos
      const updatedVideos = [...existingVideos, { videoName, videoURL }];

      await updateDoc(docRef, {
        title,
        description,
        imageURL,
        videos: updatedVideos, // Save videos as an array of objects
      });

      alert("Course updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Error updating course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="flex lg:py-12 flex-col items-center px-4 mt-32">
        <div className="flex flex-col border-2 border-gray-300 rounded-xl py-6 px-8 w-full lg:max-w-lg">
          <h1 className="text-2xl font-semibold text-center underline mb-6 text-indigo-500">
            Add Course Video
          </h1>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Description"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="Image URL"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <input
              type="text"
              placeholder="Video Name"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Video URL"
              className="border border-gray-300 px-3 py-2 rounded-lg w-full"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleUpdate}
              className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Course Video"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddVideo;
