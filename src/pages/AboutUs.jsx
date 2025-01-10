import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-100 pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MAG Coaching Center</h1>
          <p className="text-lg">
            Empowering students with quality education and guidance to achieve their dreams.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our Mission</h2>
        <p className="text-center text-gray-600 leading-relaxed max-w-2xl mx-auto">
          At MAG Coaching Center, our mission is to provide a supportive learning environment
          that inspires students to excel academically and personally. We believe in nurturing
          every student's potential and guiding them to success.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Experienced Faculty</h3>
              <p className="text-gray-600">
                Learn from industry experts and highly qualified teachers with years of experience.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600">
                State-of-the-art classrooms and learning tools to enhance your educational experience.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                A well-structured curriculum tailored to meet the needs of every student.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join MAG Coaching Center Today</h2>
          <p className="mb-6">
            Start your journey towards success with us. Let us help you achieve your academic goals.
          </p>
          <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
