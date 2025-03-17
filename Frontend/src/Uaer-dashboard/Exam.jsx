import React from "react";
import Usernavbar from "./Usernavbar";

function Exam() {
  // Sample data for upcoming exams
  const upcomingExams = [
    {
      id: 1,
      title: "Mathematics Midterm",
      date: "October 15, 2023",
      duration: "2 hours",
    },
    {
      id: 2,
      title: "Science Final Exam",
      date: "November 10, 2023",
      duration: "3 hours",
    },
    {
      id: 3,
      title: "History Quiz",
      date: "October 20, 2023",
      duration: "1 hour",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col w-64 min-h-screen p-6 shadow-lg">
        <Usernavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Exams</h1>

        {/* Upcoming Exams Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Upcoming Exams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {exam.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Date:</span> {exam.date}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Duration:</span> {exam.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Instructions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Exam Instructions
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>Arrive at least 15 minutes before the exam starts.</li>
              <li>Bring your student ID and any required materials.</li>
              <li>Do not use any unauthorized devices during the exam.</li>
              <li>Follow all instructions given by the invigilator.</li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View All Exams
          </button>
        </div>
      </div>
    </div>
  );
}

export default Exam;