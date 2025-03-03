import React, { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "High Tech Machine Learning",
    ],
    correct: 0,
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C++", "Python", "JavaScript"],
    correct: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheet",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    correct: 1,
  },
  {
    question: "What is the main purpose of JavaScript?",
    options: [
      "To style web pages",
      "To structure web pages",
      "To make web pages interactive",
      "To store web data",
    ],
    correct: 2,
  },
  {
    question: "Which of the following is a programming language?",
    options: ["HTML", "CSS", "Python", "XML"],
    correct: 2,
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Logic",
      "Standard Query Language",
      "Server Query Language",
    ],
    correct: 0,
  },
];

function Freetest() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleOptionChange = (qIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newScore = answers.reduce(
      (acc, answer, index) => (answer === questions[index].correct ? acc + 1 : acc),
      0
    );
    setScore(newScore);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Free Knowledge Test</h1>
        <p className="text-center text-gray-600 mb-6">Test your knowledge and see how much you know!</p>
        <div className="space-y-4">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{q.question}</h3>
              {q.options.map((option, optionIndex) => (
                <label key={optionIndex} className="block p-2 rounded-lg hover:bg-gray-100 cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={answers[qIndex] === optionIndex}
                    onChange={() => handleOptionChange(qIndex, optionIndex)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 mt-6 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Submit
        </button>
        {score !== null && (
          <p className="text-center mt-4 text-lg font-bold text-gray-800">
            Your Score: {score} / {questions.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default Freetest;