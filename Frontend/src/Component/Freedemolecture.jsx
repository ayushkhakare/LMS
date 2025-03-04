import React from "react";
import { motion } from "framer-motion";

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
];

function Freedemolecture() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-4">🎓 Free Demo Lecture</h1>
        <p className="text-lg text-gray-400">Experience a sample lecture to see how our teaching works!</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoLectures.map((lecture) => (
            <motion.div
              key={lecture.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: lecture.id * 0.2 }}
              className="w-full bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${lecture.videoId}`} 
                  title={lecture.title}
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-xl font-bold text-white mt-4">{lecture.title}</h2>
              <p className="text-gray-400">{lecture.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-white md:col-span-1"
        >
          <h2 className="text-2xl font-bold mb-4">📚 About the Demo Lectures</h2>
          <p className="text-gray-300 mb-2">These demo lectures give you a glimpse of our interactive teaching approach.</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Expert-led sessions covering key topics.</li>
            <li>Real-world examples to enhance learning.</li>
            <li>Engaging and easy-to-follow explanations.</li>
            <li>Q&A and discussion opportunities.</li>
          </ul>
          <p className="mt-4 text-gray-300">Join us and start learning today!</p>
          <a href="https://www.arrylogic.com" className="text-blue-400 underline pt-6 m-8">Visit At  ArryLogic</a>
        </motion.div>
      </div>
    </div>
  );
}

export default Freedemolecture;

