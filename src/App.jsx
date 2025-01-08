import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CoursePage from "./pages/CoursePage";
import UserProfile from "./pages/UserProfile";
import ScrollToTop from "./components/ScrollToTop";
import HtmlCoursePage from "./pages/All Course/HtmlCourse/HtmlCoursePage";
import CssCoursePage from "./pages/All Course/CssCourse/CssCoursePage";
import JsCoursePage from "./pages/All Course/JsCourse/JsCoursePage";
import NodejsCoursePage from "./pages/All Course/NodejsCourse/NodejsCoursePage";
import ExpressjsCoursePage from "./pages/All Course/ExpressjsCourse/ExpressjsCoursePage";
import MongoDbCoursePage from "./pages/All Course/MongoDbCourse/MongoDbCoursePage";
import ProtectedRoute from "./components/ProtectedRoutes";
import Dashboard from "./pages/AdminPage/Dashboard";
import AddCoursesTopic from "./pages/AdminPage/AddCoursesTopic";
import AddCoursesVideo from "./pages/AdminPage/AddCoursesVideo";
import AllCoursesVideo from "./pages/AdminPage/AllCoursesVideo";
import ParticulerCoursesvideo from "./pages/AdminPage/ParticulerCoursesvideo";
import QandAPage from "./pages/QandAPage";
import AskQueryPage from "./pages/AskQueryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route
            path="/course/html"
            element={
              <ProtectedRoute>
                <HtmlCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/css"
            element={
              <ProtectedRoute>
                <CssCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/javascript"
            element={
              <ProtectedRoute>
                <JsCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/nodejs"
            element={
              <ProtectedRoute>
                <NodejsCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/expressjs"
            element={
              <ProtectedRoute>
                <ExpressjsCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/mongodb"
            element={
              <ProtectedRoute>
                <MongoDbCoursePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/questions_and_answers" element={<QandAPage/>}/>
          <Route path="/ask_query" element={<AskQueryPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          {/* admin routes */}
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/add_courses_topic" element={<AddCoursesTopic/>}/>
          <Route path="/add_courses_video" element={<AddCoursesVideo/>}/>
          <Route path="/all_courses_video" element={<AllCoursesVideo/>}/>
          <Route path="/particuler_courses_video" element={<ParticulerCoursesvideo/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
