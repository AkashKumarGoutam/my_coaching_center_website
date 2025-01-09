import React, { useState } from 'react';
import { TextareaAutosize, TextField } from "@mui/material";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../firebase";
import "react-quill/dist/quill.snow.css";
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';

function AddCoursesTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    // Handle form submission to add a course topic to Firestore
    const handleSubmit = async () => {
        if (!title || !description || !imageURL) {
            alert("Please fill in all fields!");
            return;
        }

        setLoading(true);

        try {
            const db = getFirestore(app);
            const courseTopicCollection = collection(db, "course topic");

            await addDoc(courseTopicCollection, {
                title,
                description,
                imageURL,
                createdAt: new Date(),
            });

            alert("Course topic added successfully!");
            navigate("/dashboard")
            // Clear fields after successful submission
            setTitle("");
            setDescription("");
            setImageURL("");
        } catch (error) {
            console.error("Error adding course topic:", error);
            alert("Error adding course topic. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <AdminNavbar/>
        
        <div className="flex lg:py-12 flex-col items-center px-4 mt-32">
            {/* Form Section */}
            <div className="flex flex-col border-2 border-gray-300 rounded-xl py-6 px-8 w-full lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-center underline mb-6 text-indigo-500">
                    Add Courses Topic
                </h1>
                <div className="space-y-4">
                    {/* Title Field */}
                    <TextField
                        id="title"
                        label="Title"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* Description Field */}
                    <TextareaAutosize
                        aria-label="Course description"
                        minRows={4}
                        placeholder="Description"
                        className="w-full border-2 border-gray-300 rounded-lg p-3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    {/* Image URL Field */}
                    <TextField
                        id="imageURL"
                        label="Image URL"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700"
                        disabled={loading}
                    >
                        {loading ? "Adding Course Topic..." : "Add Course Topic"}
                    </button>
                </div>
            </div>
        </div></>
    );
}

export default AddCoursesTopic;
