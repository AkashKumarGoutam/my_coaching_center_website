import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Resister from "./pages/Register";
import CoursePage from "./pages/CoursePage";
import UserProfile from "./pages/UserProfile";
import ScrollToTop from "./components/ScrollToTop";
import HtmlCoursePage from "./pages/All Course/HtmlCourse/HtmlCoursePage";
import CssCoursePage from "./pages/All Course/CssCourse/CssCoursePage";
import JsCoursePage from "./pages/All Course/JsCourse/JsCoursePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop/>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resister />} />
          <Route path="/courses" element={<CoursePage />}/>
          <Route path="/course/html" element={<HtmlCoursePage/>}/>
          <Route path="/course/css" element={<CssCoursePage/>}/>
          <Route path="/course/javascript" element={<JsCoursePage/>}/>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
