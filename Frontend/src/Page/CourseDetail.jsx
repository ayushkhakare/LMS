import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SuccessStories from "../Component/SuccessStories";
import { FaRupeeSign } from "react-icons/fa";

function CourseDetail() {
  const location = useLocation();
  const course = location.state?.course;
  const [showSummary, setShowSummary] = useState(false);
  const [hideRightDiv, setHideRightDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSummary(window.scrollY > 200);
      setHideRightDiv(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!course) {
    return <div className="text-center text-xl text-red-500 mt-10">Course not found!</div>;
  }

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="relative bg-gradient-to-b from-gray-700 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Let's Learn With <span className="text-blue-400">ArrayLogic</span>
        </h1>
      </div>

      {showSummary && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-gray-700 shadow-2xl rounded-lg p-6 w-96 text-center transition-all duration-300 scale-110 border border-gray-500 hover:scale-125">
          <img
            src={course.img || "/images/placeholder.png"}
            alt={course.title}
            className="w-full h-40 object-cover rounded-lg shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold text-white">{course.title}</h3>
          <p className="text-gray-300 text-md">Instructor: {course.teacher}</p>
          <p className="text-blue-400 font-bold mt-1 flex items-center justify-center">
            Price: <FaRupeeSign className="ml-1" /> {course.price}
          </p>
          <p className="text-gray-300 text-md mt-1">Rating: ⭐ {course.rating} / 5</p>
        </div>
      )}

      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gray-700 shadow-lg rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-4">What You Will Learn</h3>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                <li>Master the fundamentals of {course.title}</li>
                <li>Work on real-world projects to gain hands-on experience</li>
                <li>Understand advanced concepts with ease</li>
                <li>Improve problem-solving skills and industry readiness</li>
              </ul>
            </div>
            <div className="text-center">
              <NavLink
                to="/payment"
                state={{ course }}
                className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-lg"
              >
                Enroll Now
              </NavLink>
            </div>
            <SuccessStories></SuccessStories>
          </div>

          {!hideRightDiv && (
            <div className="bg-gray-700 shadow-lg rounded-lg overflow-hidden p-8">
              <div className="relative w-full h-72">
                <img
                  src={course.img || "/images/placeholder.png"}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <h2 className="text-4xl font-bold mt-6 text-white">{course.title}</h2>
              <p className="text-gray-300 text-lg mt-4">
                {course.description || "This course will help you gain mastery over the subject."}
              </p>
              <div className="mt-6 space-y-4">
                <p className="text-2xl font-bold text-blue-400 flex items-center">
                  Price: <FaRupeeSign className="ml-1" /> {course.price}
                </p>
                <p className="text-lg text-gray-300">Instructor: <span className="font-semibold">{course.teacher}</span></p>
                <p className="text-lg text-gray-300">Rating: ⭐ {course.rating} / 5</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;