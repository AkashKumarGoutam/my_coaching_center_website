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
import UserProtectedRoute from "./components/UserProtectedRoutes";
import Dashboard from "./pages/AdminPage/Dashboard";
import AddCoursesTopic from "./pages/AdminPage/AddCoursesTopic";
import AddCoursesVideoPage from "./pages/AdminPage/AddCoursesVideoPage";
import AllCoursesVideo from "./pages/AdminPage/AllCoursesVideo";
import ParticulerCoursesvideo from "./pages/AdminPage/ParticulerCoursesvideo";
import QandAPage from "./pages/QandAPage";
import AskQueryPage from "./pages/AskQueryPage";
import EditCoursesTopic from "./pages/AdminPage/EditCoursesTopic";
import AddVideo from "./pages/AdminPage/AddVideo";
import CoursesVideo from "./pages/CoursesVideo";
import AdminProtectedRoute from "./components/AdminProtectedRoutes";
import AboutUs from "./pages/AboutUs";

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
          <Route
            path="/courses"
            element={
              <UserProtectedRoute>
                <CoursePage />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/course/:id"
            element={
              <UserProtectedRoute>
                <CoursesVideo />
              </UserProtectedRoute>
            }
          />
          {/* <Route
            path="/course/css"
            element={
              <UserProtectedRoute>
                <CssCoursePage />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/course/javascript"
            element={
              <UserProtectedRoute>
                <JsCoursePage />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/course/nodejs"
            element={
              <UserProtectedRoute>
                <NodejsCoursePage />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/course/expressjs"
            element={
              <UserProtectedRoute>
                <ExpressjsCoursePage />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/course/mongodb"
            element={
              <UserProtectedRoute>
                <MongoDbCoursePage />
              </UserProtectedRoute>
            }
          /> */}
          <Route
            path="/profile"
            element={
              <UserProtectedRoute>
                <UserProfile />
              </UserProtectedRoute>
            }
          />
          <Route path="/questions_and_answers" element={<QandAPage />} />
          <Route path="/ask_query" element={<AskQueryPage />} />
          <Route path="/about_us" element={<AboutUs />} />
          {/* admin routes */}
          <Route path="/dashboard" element={<AdminProtectedRoute><Dashboard /></AdminProtectedRoute>} />
          <Route path="/add_courses_topic" element={<AdminProtectedRoute><AddCoursesTopic /></AdminProtectedRoute>} />
          <Route
            path="/edit_courses_topic/:id"
            element={<AdminProtectedRoute><EditCoursesTopic /></AdminProtectedRoute>}
          />
          <Route
            path="/add_courses_video_page"
            element={<AdminProtectedRoute><AddCoursesVideoPage /></AdminProtectedRoute>}
          />
          <Route path="/add_courses_video/:id" element={<AdminProtectedRoute><AddVideo /></AdminProtectedRoute>} />
          <Route path="/all_courses_video" element={<AdminProtectedRoute><AllCoursesVideo /></AdminProtectedRoute>} />
          <Route
            path="/particuler_courses_video/:id"
            element={<AdminProtectedRoute><ParticulerCoursesvideo /></AdminProtectedRoute>}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
