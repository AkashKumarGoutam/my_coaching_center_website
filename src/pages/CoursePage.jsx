import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";

function CoursePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const courses = [
    {
      title: "HTML",
      description: "Basic to Advance",
      imageUrl:
        "https://facemark.az/files/news/2023_07_19_10_08_08_d31a.jpeg",
      link: "/course/html",
    },
    {
      title: "CSS",
      description: "Master styles and layouts",
      imageUrl:
      "https://i0.wp.com/buraksenturk.com.tr/wp-content/uploads/2014/06/CSS.png?fit=400%2C300&ssl=1",
      link: "/course/css",
    },
    {
      title: "JavaScript",
      description: "From zero to hero",
      imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*l4rSYDc3iAHiDm79WSJrRA.png",
      link: "/course/javascript",
    },
  ];

  return (
    <div className="p-10 mt-20">
      <h1 className="text-3xl font-bold text-center text-gray-800">Courses Page</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
}

export default CoursePage;
