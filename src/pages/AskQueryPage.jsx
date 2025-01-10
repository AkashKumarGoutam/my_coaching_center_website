import React, { useState } from "react";

function AskQueryPage() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  // Handle adding a new question
  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        { id: Date.now(), question: newQuestion, answers: [], likes: 0 },
      ]);
      setNewQuestion("");
    }
  };

  // Handle adding an answer
  const handleAddAnswer = (id, newAnswer) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? { ...q, answers: [...q.answers, { text: newAnswer, likes: 0 }] }
          : q
      )
    );
  };

  // Handle liking a question
  const handleLike = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, likes: q.likes + 1 } : q
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Ask Your Questions
      </h1>

      {/* Ask Question Form */}
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Ask your question here..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>
          <button
            onClick={handleAddQuestion}
            className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700"
          >
            Post Question
          </button>
        </div>
      </div>

      {/* Questions and Answers */}
      <div className="container mx-auto px-4 mt-10">
        {questions.map((q) => (
          <div key={q.id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            {/* Question Section */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-indigo-600">
                {q.question}
              </h2>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => handleLike(q.id)}
                  className="flex items-center gap-1 text-gray-600 hover:text-indigo-600"
                >
                  👍 {q.likes} Like
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600">
                  💬 Comment
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600">
                  ↗️ Share
                </button>
              </div>
            </div>

            {/* Answer Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Answers
              </h3>
              {q.answers.map((answer, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-4 mb-2 text-sm text-gray-700"
                >
                  {answer.text}
                </div>
              ))}

              {/* Add Answer Form */}
              <textarea
                placeholder="Add your answer..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mt-4"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAddAnswer(q.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              ></textarea>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AskQueryPage;
