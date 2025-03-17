import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Usernavbar from "./Usernavbar";
import { motion } from "framer-motion";
import { useState } from "react";
import{AnimatePresence} from "framer-motion";

function Userdashboard() {
  const image = [
    { img: "/offer1.webp" },
    { img: "/offer2.jpg" },
    { img: "/offer3.webp" },
    { img: "/offer4.jpg" },
    { img: "/offer5.avif" },
  ];
  


  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  useEffect(() => {
    if (!auth) {
      navigate("/login"); // Redirect to login if user is not authenticated
    }
  }, [auth, navigate]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [image.length]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col w-64 h-full p-6 shadow-lg">
        <Usernavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-2 overflow-y-auto">
        {/* Top Section - Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <h4 className="text-xl text-gray-600">My Learning</h4>
          <h6 className="text-gray-500 text-lg">
            Track your progress and continue your learning journey.
          </h6>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Profile Card */}
           <div className=" bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-gray-200">  
            <h1 className="text-xl font-semibold mb-4 text-gray-800">
              My Profile
            </h1>
            <img
              src="/ayush.jpeg"
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-gray-200 shadow-md"
            />
            <h2 className="text-lg font-semibold mt-4 text-gray-700">
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
            </div> 
          {/* Coming Soon - Auto-Scrolling Image Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.9 }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-center items-center border border-gray-200 col-span-1 md:col-span-3 overflow-hidden w-full"
          >
            {/* Image Scrolling Container */}
            <div className="relative h-[32vh] sm:h-[35vh] md:h-[37vh] w-full overflow-hidden">
      <AnimatePresence>
        {image.map((img, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0, scale: 0.90 }}
              animate={{ opacity: 3, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.9 }}
            >
              <img
                src={img.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-30"></div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>

            {/* Coming Soon Text */}
            <h2 className="text-xl font-semibold text-gray-700 mt-2">
              Coming Soon
            </h2>
            <p className="text-gray-500 text-center mt-1">
              More features will be added soon...
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Userdashboard;
