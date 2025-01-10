import React from "react";

function CourseImageDemo({ src }) {
  return (
    <div className="">
      <div className="lg:w-96 w-80">
      <img src={src} alt="Course" className="w-full h-48" />
    </div>
    </div>
  );
}

export default CourseImageDemo;
