import React from "react";
import { NavLink } from "react-router-dom";

const demoLectures = [
    {
        id: 1,
        title: "Introduction to React",
        description: "Learn the fundamentals of React and build modern web applications.",
        videoId: "w7ejDZ8SWv8",
        image: "/react-course.jpg",
      },
      {
        id: 2,
        title: "JavaScript Basics",
        description: "Master JavaScript and become a pro at web development.",
        videoId: "hdI2bqOjy3c",
        image: "/javascript-course.jpg",
      },
      {
        id: 3,
        title: "Mastering Tailwind CSS",
        description: "Style your websites efficiently with Tailwind CSS.",
        videoId: "mSAx7YH1zLk",
        image: "/tailwind-course.jpg",
      },
      {
        id: 4,
        title: "Advanced Node.js",
        description: "Take your backend skills to the next level with Node.js.",
        videoId: "TlB_eWDSMt4",
        image: "/nodejs-course.jpg",
      },
      {
        id: 5,
        title: "Full-Stack Web Development",
        description: "Learn how to integrate frontend and backend technologies.",
        videoId: "nu_pCVPKzTk",
        image: "/fullstack-course.jpg",
      },
      {
        id: 6,
        title: "Python for Beginners",
        description: "Kickstart your programming journey with Python.",
        videoId: "rfscVS0vtbw",
        image: "/python-course.jpg",
      },
      {
        id: 7,
        title: "Django Framework Tutorial",
        description: "Learn Django for backend web development.",
        videoId: "F5mRW0jo-U4",
        image: "/django-course.jpg",
      },
      {
        id: 8,
        title: "REST API with Express.js",
        description: "Build and deploy REST APIs using Express.js.",
        videoId: "o5wJkJJpKtM",
        image: "/express-course.jpg",
      },
      {
        id: 9,
        title: "MongoDB for Beginners",
        description: "Learn MongoDB database and its integration with Node.js.",
        videoId: "ExcRbA7fy_A",
        image: "/mongodb-course.jpg",
      },
      {
        id: 10,
        title: "Next.js Crash Course",
        description: "Master Next.js and server-side rendering in React.",
        videoId: "mTz0GXj8NN0",
        image: "/nextjs-course.jpg",
      },
      {
        id: 11,
        title: "Flutter for Mobile Development",
        description: "Build mobile apps using Flutter and Dart.",
        videoId: "VPvVD8t02U8",
        image: "/flutter-course.jpg",
      },
      {
        id: 12,
        title: "Blockchain and Web3 Fundamentals",
        description: "Understand blockchain technology and Web3 applications.",
        videoId: "XOKJLmDkR3w",
        image: "/blockchain-course.jpg",
      },
      {
        id: 13,
        title: "Machine Learning with Python",
        description: "Dive into ML concepts and build AI models.",
        videoId: "7eh4d6sabA0",
        image: "/machinelearning-course.jpg",
      }
    ];

function DemoLecture() {
  return (
    <div className="bg-gray-900 min-h-screen py-30 px-6">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-white text-center mb-16">
        Free Demo Lectures
      </h1>

      {/* Lecture List */}
      <div className="space-y-16">
        {demoLectures.map((lecture, index) => (
          <div
            key={lecture.id}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } bg-gray-800 p-8 rounded-lg shadow-xl`}
          >
            {/* Video Section */}
            <div className="w-full md:w-1/2 p-6 flex justify-center">
              <iframe
                className="w-full h-96 md:h-[450px] rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${lecture.videoId}`}
                title={lecture.title}
                allowFullScreen
              ></iframe>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white p-20">
              <h2 className="text-4xl font-bold mb-5">{lecture.title}</h2>
              <p className="text-lg text-gray-300 mb-6">{lecture.description}</p>

              {/* Watch Button */}
              <a
                href={`https://www.youtube.com/watch?v=${lecture.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white text-lg px-12 py-4 rounded-md shadow-md hover:bg-green-600 transition"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* More Link */}
      <div className="text-center mt-14">
        <NavLink
          to="/"
          className="text-green-400 text-xl font-semibold hover:underline"
        >
          Try Premium Lecture →
        </NavLink>
      </div>
    </div>
  );
}

export default DemoLecture;
