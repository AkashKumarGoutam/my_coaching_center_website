import React from "react";

function QandAPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-indigo-600 m-8 underline">
        Questions and Answers
      </h1>

      {/* Q&A Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Question Card */}
          {Array(6)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-lg font-semibold text-indigo-600 mb-2">
                  {index + 1}. What is HTML?
                </h2>
                <p className="text-gray-600 text-sm">
                  HTML stands for Hypertext Markup Language, the language of the
                  Internet. It is the standard text formatting language used for
                  creating and displaying pages on the Internet. HTML documents
                  comprise the elements and the tags that format it for proper
                  page display.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default QandAPage;
