import React from "react";
import Usernavbar from "./Usernavbar";

function Interview() {
  // Sample data for upcoming interviews
  const upcomingInterviews = [
    {
      id: 1,
      company: "Tech Corp",
      role: "Software Engineer",
      date: "October 20, 2023",
      time: "10:00 AM",
    },
    {
      id: 2,
      company: "Innovate Inc",
      role: "Frontend Developer",
      date: "October 25, 2023",
      time: "2:00 PM",
    },
    {
      id: 3,
      company: "Data Solutions",
      role: "Data Analyst",
      date: "November 1, 2023",
      time: "11:00 AM",
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Interviews</h1>

        {/* Upcoming Interviews Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Upcoming Interviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingInterviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {interview.role}
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Company:</span> {interview.company}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Date:</span> {interview.date}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Time:</span> {interview.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Tips Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Interview Tips
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>Research the company and role thoroughly.</li>
              <li>Practice common interview questions.</li>
              <li>Dress professionally and arrive on time.</li>
              <li>Prepare questions to ask the interviewer.</li>
              <li>Follow up with a thank-you email after the interview.</li>
            </ul>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Resources
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://example.com/interview-guide"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interview Preparation Guide
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/common-questions"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Common Interview Questions
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/mock-interviews"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mock Interview Practice
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule a Mock Interview
          </button>
        </div>
      </div>
    </div>
  );
}

export default Interview;