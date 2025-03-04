import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Course({ limit }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3500/addcourse");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const coursesToShow = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-6 cursor-pointer">
        {location.pathname !== "/" && (
          <>
            <NavLink to="/" className="text-xl text-blue-600">
              Home/
            </NavLink>
            <span className="text-2xl text-white">Course List</span>
          </>
        )}

        <h2 className="text-3xl font-bold text-center text-white mb-8">Explore Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coursesToShow.map((course, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/course/${course.title.toLowerCase().replace(/\s/g, "-")}`, {
                  state: { course },
                })
              }
              className="mx-auto rounded-lg border bg-neutral-800 dark:bg-[#181a1b] dark:border-[#353a3c] shadow-md md:mx-0 p-5 overflow-hidden transition-all duration-300 max-w-[400px] select-none"
            >
              {/* Image Section */}
              <div className="max-h-52 w-full overflow-hidden rounded-lg mb-4">
                <img
                  alt="course_img"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  className="mx-auto object-cover w-full h-full"
                  src={course.img} // Using the img URL
                  style={{ color: "transparent" }}
                />
              </div>

              {/* Content Section */}
              <div>
                {/* Title */}
                <div className="text-white mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl">
                  {course.title}
                </div>

                {/* Rating */}
                <div className="text-white mb-2 text-sm">
                  <span className="font-bold">Rating: </span>
                  {course.rating} ★
                </div>

                {/* Divider */}
                <div className="h-[2px] w-3/4 bg-gray-500 opacity-10"></div>

                {/* Price and Discount Section */}
                <div className="mt-4 flex gap-3 font-bold">
                  <p className="text-base text-[#6e96cf]">{course.price}</p>
                  {course.discount && (
                    <>
                      <p className="text-base text-white line-through">{course.price}</p>
                      <p className="rounded-md bg-green-500 px-2 py-1 text-sm text-white">
                        57% off
                      </p>
                    </>
                  )}
                </div>

                {/* Teacher */}
                <div className="text-white mt-4 text-sm">
                  <span className="font-bold">Instructor: </span>
                  {course.teacher}
                </div>

                {/* Description */}
                <div className="text-white mt-4 text-sm">
                  <span className="font-bold">Description: </span>
                  {course.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {location.pathname !== "/course" && (
        <div className="flex justify-center mt-6">
          <NavLink
            to="/course"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all text-center"
          >
            Show More
          </NavLink>
        </div>
      )}
    </section>
  );
}

export default Course;
