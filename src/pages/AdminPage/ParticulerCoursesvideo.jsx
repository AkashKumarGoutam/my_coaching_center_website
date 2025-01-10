import React, { useState, useEffect } from "react";
import playIcon from "../../assets/play.png";
import AdminNavbar from "./AdminNavbar";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import app from "../../firebase"; // Firebase initialization

function ParticulerCoursesvideo() {
  const { id } = useParams();
  const db = getFirestore(app);

  const [title, setTitle] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, "course topic", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const courseData = docSnap.data();
          setTitle(courseData.title || "");
          setVideos(courseData.videos || []);
        } else {
          alert("Course not found");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
        alert("Error fetching course details.");
      }
    };

    fetchCourse();
  }, [id, db]);

  const handleDelete = async (videoIndex) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (isConfirmed) {
      try {
        const updatedVideos = videos.filter((_, index) => index !== videoIndex);

        const docRef = doc(db, "course topic", id);
        await updateDoc(docRef, {
          videos: updatedVideos,
        });

        setVideos(updatedVideos);
        alert("Video deleted successfully!");
      } catch (error) {
        console.error("Error deleting video:", error);
        alert("Error deleting the video.");
      }
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="py-20">
        <div>
          <h1 className="flex justify-center text-3xl py-3 font-semibold">
            {title} Syllabus
          </h1>
          <div className="flex justify-center gap-6">
            <div className="flex gap-3 items-center">
              <img
                src="https://training-uploads.internshala.com/signup_ab/features/icons-s/videos.png.webp?v=5"
                className="w-10"
              />
              <h1 className="font-semibold">{videos.length} video tutorials</h1>
            </div>
          </div>
          <div className="flex justify-center bg-red-200">
          <h1 className=" lg:text-xl text-sm py-3 px-3 lg:px-0 font-semibold">
            After completing the training, you can also download videos for future reference
          </h1>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="border lg:w-[50%] rounded-xl p-2">
            {videos.map((video, index) => (
              <div key={index} className="my-4 px-6">
                <h1 className="text-xl font-semibold py-2">{video.videoName}</h1>
                <div className="lg:flex justify-between items-center">
                  <div className="flex gap-10">
                    <div className="flex gap-2 items-center">
                      <img
                        src="https://training-uploads.internshala.com/signup_ab/features/icons-s/assignments.png.webp?v=5"
                        className="w-8"
                      />
                      <h1 className="font-semibold">Video {index + 1}</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={playIcon} className="w-6" />
                      <a
                        href={video.videoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-500"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-4 py-1 my-4 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticulerCoursesvideo;
