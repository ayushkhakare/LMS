import { motion } from "framer-motion";
import Usernavbar from "./Usernavbar";

function Challenges() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col  w-64 min-h-screen p-6 shadow-lg">
        <Usernavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Challenges</h1>
          <h4 className="text-xl text-gray-600 mt-2">Upcoming Challenges</h4>
          <h6 className="text-gray-500 text-lg">
            Participate and enhance your skills.
          </h6>
        </div>

        {/* Grid Layout - Profile (1/4) & Content (3/4) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Card (1/4 width) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center border border-gray-200"
          >
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              My Profile
            </h1>

            {/* Profile Image */}
            <img
              src="/ayush.jpeg"
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-gray-200 shadow-md"
            />

            <h2 className="text-lg font-semibold text-gray-700 mt-4">
              Ayush Khakare
            </h2>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                Edit Profile
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors"
              >
                Logout
              </motion.button>
            </div>
          </motion.div>

          {/* Challenges Section (3/4 width) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 lg:col-span-3"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Active Challenges
            </h2>
            <p className="text-gray-600 mb-6">
              Take part in ongoing challenges and test your skills!
            </p>

            {/* Challenge List */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800">
                  React Mastery Challenge
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Build a real-world React application with Tailwind CSS.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Java Coding Challenge
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Solve 5 DSA problems using Java within 30 minutes.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Frontend UI Design
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Create a responsive UI design for a dashboard.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;