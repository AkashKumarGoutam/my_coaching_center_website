import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ title, description, imageUrl, link }) {
  return (
    <Link to={link || "/"} className="p-4">
      <div className="border-2 border-indigo-500 w-80 p-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={imageUrl}
          alt={`${title} course`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="px-3 py-2">
          <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
