import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMedal, FaTrophy, FaStar, FaChartBar } from "react-icons/fa";

function Gamification() {
  const [points, setPoints] = useState(1500);
  const leaderboard = [
    { id: 1, name: "John Doe", points: 3200 },
    { id: 2, name: "Jane Smith", points: 2900 },
    { id: 3, name: "Michael Johnson", points: 2600 },
    { id: 4, name: "Ayush Khakare", points: 1500 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-[#ffc0c7] mb-6 text-center drop-shadow-lg">
        🎖 Gamification Features 🎖
      </h1>

      {/* Points & Badges Section */}
      <motion.div 
        className="flex flex-col items-center bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-700"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-3xl font-bold mb-3">Your Points: {points}</h2>
        <p className="text-gray-300 text-lg text-center">Earn points by completing courses, quizzes & daily logins!</p>
        <div className="flex space-x-6 mt-5">
          <motion.div whileHover={{ scale: 1.3 }} className="text-yellow-400 text-4xl">
            <FaStar />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} className="text-blue-400 text-4xl">
            <FaMedal />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} className="text-red-400 text-4xl">
            <FaTrophy />
          </motion.div>
        </div>
      </motion.div>

      {/* Leaderboard */}
      <div className="mt-10 w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-5 flex items-center justify-center gap-3">
          <FaChartBar className="text-yellow-400" /> Leaderboard
        </h2>
        <ul className="space-y-4">
          {leaderboard.map((user, index) => (
            <motion.li
              key={user.id}
              className={`flex justify-between p-4 rounded-lg shadow-lg transition-all ${
                user.id === 4 ? "bg-blue-600 text-white" : "bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-semibold text-lg">{index + 1}. {user.name}</span>
              <span className="font-bold text-yellow-400 text-lg">{user.points} pts</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gamification;