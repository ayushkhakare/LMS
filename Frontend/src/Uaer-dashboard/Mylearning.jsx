import { motion } from "framer-motion";
import Usernavbar from "./Usernavbar";

function Mylearning() {
  // Sample data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "React JS Masterclass",
      instructor: "John Doe",
      progress: 75,
      thumbnail: "/react-course.jpg",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      progress: 50,
      thumbnail: "/javascript-course.jpg",
    },
    {
      id: 3,
      title: "Node.js for Beginners",
      instructor: "Alice Johnson",
      progress: 30,
      thumbnail: "/nodejs-course.jpg",
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Bob Brown",
      progress: 90,
      thumbnail: "/uiux-course.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col  w-64 min-h-screen p-6 shadow-lg">
        <Usernavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Page Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Learning</h1>
          <p className="text-gray-600 mt-2">
            Track your progress and continue your learning journey.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Course Thumbnail */}
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />

              {/* Course Details */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-gray-600 mt-2">By {course.instructor}</p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {course.progress}% Completed
                  </p>
                </div>

                {/* Continue Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue Learning
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State (if no courses are enrolled) */}
        {enrolledCourses.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800">
              No Courses Enrolled !
            </h2>
            <p className="text-gray-600 mt-2">
              Explore our courses and start your learning journey today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Courses
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mylearning;