import React from "react";

function CourseImageDemo({ src }) {
  return (
    <div className="w-96">
      <img src={src} alt="Course" className="w-full h-48" />
    </div>
  );
}

export default CourseImageDemo;
