import React, { useState,useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function course({ limit }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize courses state with the default data
  // const [courses, setCourses] = useState([
  //   { img: "/angular.png", title: "Angular", rating: "4.5", price: "$200", teacher: "John Doe", description: "Learn Angular, the powerful framework for building dynamic web applications with TypeScript." },
  //   { img: "/aws.png", title: "AWS", rating: "4.8", price: "$300", teacher: "Jane Smith", description: "Master Amazon Web Services (AWS) and gain expertise in cloud computing and deployment." },
  //   { img: "/botstrap.jpg", title: "Bootstrap", rating: "4.2", price: "$150", teacher: "Alice Johnson", description: "Build responsive and modern websites using the Bootstrap CSS framework." },
  //   { img: "/c++.png", title: "C++", rating: "4.6", price: "$180", teacher: "Bob Lee", description: "Get a deep understanding of C++ programming, object-oriented principles, and memory management." },
  //   { img: "/Cloud.png", title: "Cloud Computing", rating: "4.7", price: "$220", teacher: "Eve White", description: "Learn the fundamentals of cloud computing, including storage, security, and virtualization." },
  //   { img: "/Docker.png", title: "Docker", rating: "4.4", price: "$250", teacher: "Charlie Brown", description: "Explore containerization with Docker and learn how to deploy and manage applications efficiently." },
  //   { img: "/html.png", title: "HTML & CSS", rating: "4.9", price: "$100", teacher: "Grace King", description: "Master HTML and CSS to create stunning web pages with modern design techniques." },
  //   { img: "/java.png", title: "Java", rating: "4.5", price: "$200", teacher: "David Clark", description: "Learn Java programming, object-oriented concepts, and backend development with Spring Boot." },
  //   { img: "/javascript.jpg", title: "JavaScript", rating: "4.7", price: "$180", teacher: "Olivia Smith", description: "Master JavaScript and develop interactive, dynamic websites and web applications." },
  //   { img: "/kotlin.jpg", title: "Kotlin", rating: "4.3", price: "$220", teacher: "Michael Miller", description: "Learn Kotlin, the modern programming language used for Android app development." },
  //   { img: "/Kubernate.png", title: "Kubernetes", rating: "4.6", price: "$260", teacher: "Linda Davis", description: "Understand Kubernetes and how to manage containerized applications at scale." },
  //   { img: "/mongodb.png", title: "MongoDB", rating: "4.8", price: "$240", teacher: "James Wilson", description: "Learn NoSQL database management with MongoDB and build high-performance applications." },
  //   { img: "/mysql.png", title: "MySQL", rating: "4.7", price: "$200", teacher: "Sarah Taylor", description: "Master MySQL and learn how to design and optimize relational databases." },
  //   { img: "/net.jpg", title: ".NET", rating: "4.4", price: "$180", teacher: "Paul Thomas", description: "Develop enterprise-grade applications using Microsoft's .NET framework." },
  //   { img: "/Node.png", title: "Node.js", rating: "4.6", price: "$220", teacher: "Emma Jackson", description: "Learn Node.js and build scalable, server-side applications using JavaScript." },
  //   { img: "/oracle.png", title: "Oracle", rating: "4.7", price: "$250", teacher: "Daniel White", description: "Gain expertise in Oracle database management and SQL queries." },
  //   { img: "/Php.png", title: "PHP", rating: "4.2", price: "$160", teacher: "Lucas Green", description: "Master PHP and build dynamic, data-driven websites and web applications." },
  //   { img: "/python.png", title: "Python", rating: "4.9", price: "$300", teacher: "Sophia Harris", description: "Learn Python programming, data structures, and backend development with Django." },
  //   { img: "/react.png", title: "React", rating: "4.8", price: "$220", teacher: "Jack Scott", description: "Master React.js and build modern, high-performance web applications." },
  //   { img: "/Redux.png", title: "Redux", rating: "4.6", price: "$180", teacher: "Megan Lewis", description: "Learn Redux for state management in React applications and improve performance." },
  //   { img: "/telwind.jpg", title: "Tailwind CSS", rating: "4.5", price: "$150", teacher: "Thomas Walker", description: "Build beautiful, custom-styled websites efficiently with Tailwind CSS." },
  //   { img: "/vue.jpg", title: "Vue.js", rating: "4.7", price: "$200", teacher: "Natalie Lee", description: "Learn Vue.js, a progressive JavaScript framework for building modern web apps." },
  // ]);

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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 cursor-pointer">
        {location.pathname !== "/" && (
          <>
            <NavLink to="/" className="text-xl text-blue-600">Home/</NavLink>
            <span className="text-2xl text-black">Course List</span>
          </>
        )}

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {coursesToShow.map((course, index) => (
    <div
      key={index}
      onClick={() =>
        navigate(`/course/${course.title.toLowerCase().replace(/\s/g, "-")}`, {
          state: { course },
        })
      }
      className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-300 hover:border-blue-500"
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover rounded-lg absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src="/Hover.jpg"
          alt="Alternate Image"
          className="w-full h-full object-cover rounded-lg absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="p-4 text-gray-800 text-center">
        <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-all">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 my-2">Instructor: {course.teacher}</p>
        <div className="flex items-center justify-center space-x-2 text-yellow-500">
          <span className="text-lg">⭐ {course.rating}</span>
          <span className="text-sm text-gray-500">(Ratings)</span>
        </div>
        <p className="text-lg font-bold text-blue-600 mt-2">$ {course.price}</p>
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

export default course;