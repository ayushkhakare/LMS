import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SuccessStories from "../Component/SuccessStories";

function CourseDetail() {
  const location = useLocation();
  const course = location.state?.course;
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowSummary(true);
      } else {
        setShowSummary(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!course) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        Course not found!
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-cyan-200/90 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-xl mx-auto">
            Let's Learn With <span className="text-blue-600">ArrayLogic</span>
          </h1>
        </div>
      </div>

      {/* Floating Info Box */}
      {showSummary && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-white shadow-2xl rounded-lg p-6 w-96 text-center transition-all duration-300 scale-110 border border-gray-300">
          <img
            src={course.img || "/images/placeholder.png"}
            alt={course.title}
            className="w-full h-40 object-cover rounded-lg shadow-md mb-4"
            onError={(e) => (e.target.src = "/images/placeholder.png")}
          />
          <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
          <p className="text-gray-600 text-md">Instructor: {course.teacher}</p>
          <p className="text-blue-600 font-bold mt-1">Price: {course.price}</p>
          <p className="text-gray-700 text-md mt-1">Rating: ⭐ {course.rating} / 5</p>
        </div>
      )}

      {/* Course Details Section (Two Columns) */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Right Column: Additional Details */}
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                What You Will Learn
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>Master the fundamentals of {course.title}</li>
                <li>Work on real-world projects to gain hands-on experience</li>
                <li>Understand advanced concepts with ease</li>
                <li>Improve problem-solving skills and industry readiness</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Prerequisites
              </h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>Basic knowledge of programming concepts (if applicable)</li>
                <li>A computer with internet access</li>
                <li>Eagerness to learn and practice</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                This Course Includes
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Explore the comprehensive learning experience awaiting you on this course detail page. From fundamental concepts to advanced techniques, discover what you will learn and how it will propel your skills to new heights.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>Tailwind CSS</li>
                <li>CSS Animations</li>
                <li>Core JavaScript</li>
                <li>End to End React.js Application</li>
                <li>15+ Industry Grade Projects</li>
                <li>No Pre requisite required</li>
                <li>End to End Backend with Node.js and Express.js</li>
                <li>Building all Projects from absolute Scratch</li>
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

          {/* Left Column: Course Details */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <div className="relative w-full h-72">
              <img
                src={course.img || "/images/placeholder.png"}
                alt={course.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
                onError={(e) => (e.target.src = "/images/placeholder.png")}
              />
            </div>

            <h2 className="text-4xl font-bold mt-6">{course.title}</h2>
            <p className="text-gray-700 text-lg mt-4">
              {course.description || "This course will help you gain mastery over the subject."}
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-2xl font-bold text-blue-600">Price: {course.price}</p>
              <p className="text-lg text-gray-600">
                Instructor: <span className="font-semibold">{course.teacher}</span>
              </p>
              <p className="text-lg text-gray-600">
                Rating: ⭐ {course.rating} / 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
