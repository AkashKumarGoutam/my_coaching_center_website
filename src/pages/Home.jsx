import React from "react";
import HeroSection from "../components/HeroSection";
import CourseImageDemo from "../components/CourseImageDemo";

function Home() {
  const courseImages = [
    "https://facemark.az/files/news/2023_07_19_10_08_08_d31a.jpeg",
    "https://i0.wp.com/buraksenturk.com.tr/wp-content/uploads/2014/06/CSS.png?fit=400%2C300&ssl=1",
    "https://miro.medium.com/v2/resize:fit:1400/1*l4rSYDc3iAHiDm79WSJrRA.png",
    "https://blog.ekohordan.com/media/nodejs.png",
    "https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA",
    "https://media.licdn.com/dms/image/D4D12AQETgv5fMiYEXA/article-cover_image-shrink_720_1280/0/1677609185621?e=2147483647&v=beta&t=4Hu56lmQmUTtVSMFDKfipqVq9U1jo41sIJpib0lQoCo"
  ];

  return (
    <div>
      <HeroSection />
     <div className="py-20">
     <h1 className="text-2xl font-semibold uppercase flex justify-center py-4">
        All Courses
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {courseImages.map((image, index) => (
          <CourseImageDemo key={index} src={image} />
        ))}
      </div>
     </div>
    </div>
  );
}

export default Home;
