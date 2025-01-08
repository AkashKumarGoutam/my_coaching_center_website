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
    {
      title: "Node Js",
      description: "Basic to advance",
      imageUrl:
      "https://blog.ekohordan.com/media/nodejs.png",
      link: "/course/nodejs",
    },
    {
      title: "Express Js",
      description: "From zero to hero",
      imageUrl:
      "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA",
      link: "/course/expressjs",
    },
    {
      title: "MongoDB",
      description: "From zero to hero",
      imageUrl:
      "https://media.licdn.com/dms/image/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=4Hu56lmQmUTtVSMFDKfipqVq9U1jo41sIJpib0lQoCo",
      link: "/course/mongodb",
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
