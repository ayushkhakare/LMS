import { useState } from 'react';
import "animate.css"; // Optional animation import
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Herolinks() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section className="bg-gradient-to-r from-[#0d1721] to-[#1a2940] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        
        {/* Left Side: Hero Section + Feedback Section */}
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center text-[#e0e0e0]">
            <h1 className="text-3xl md:text-5xl font-extrabold animate__animated animate__fadeIn">
              Crack the Code <br />to Success with <span className="text-blue-400">ArrayLogic</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto my-6">
              Elevate your programming skills, solve challenges, and unlock the <br /> world of coding possibilities.
            </p>
            <div className="space-x-4 mt-8">
              <NavLink to="/course" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition duration-300">
                View Courses
              </NavLink>
              <NavLink to="/demolecture" className="text-white px-6 py-3 rounded-full hover:bg-green-400 transition duration-300">
                Watch Video <span className="text-red-400">| Live <FaArrowRight className="text-white text-2xl inline-block ml-2" /></span>
              </NavLink>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="text-center">
            <div className="flex justify-center mt-10">
              {[
                "Soumya Banerjee",
                "Saikat Mukherjee",
                "Pranay Gupta",
                "Abir Pal",
                "Kuldeep Saini",
                "Ankush Mehra",
              ].map((name, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} // Random image URL
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover transition duration-300 transform hover:scale-105"
                  />
                 {hovered === index && (
  <div className="absolute bottom-13 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 px-4 flex justify-center items-center h-15 w-30">
    <p className='text-sm'>{name}</p>
  </div>
)}

                </div>
              ))}
            </div>
            <p className="text-lg text-[#e0e0e0] mt-2">70,000+ Happy Students</p>
          </div>
        </div>

        {/* Right Side: Call to Action Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-[#e0e0e0] text-center">What We Offer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-6">
            {[
              "Quick Compiler",
              "Mock Tests",
              "Interview Experiences",
              "Free Web Dev",
              "Core CS Subjects",
              "Articles",
              "Tutorials",
              "Dev Challenges",
            ].map((item, index) => (
              <button
                key={index}
                className="cursor-pointer relative w-full h-16 bg-transparent text-white font-semibold text-lg sm:text-xl capitalize rounded-md border-2 border-transparent hover:bg-opacity-10 hover:border-orange-500 hover:bg-black transition-all duration-500 flex items-center justify-center"
              >
                {/* Button Content */}
                <span className="z-[1]">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Follower Count Section */}
      <div className="text-center mt-16 space-y-6">
        <h2 className="text-2xl text-[#e0e0e0] font-semibold">Join Our Growing Community</h2>
        <div className="flex justify-center gap-12 text-white">
          <div className="space-y-2">
            <p className="text-xl">YouTube</p>
            <p className="text-lg">1M+ Subscribers</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl">Twitter</p>
            <p className="text-lg">6K+ Followers</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl">Instagram</p>
            <p className="text-lg">135K+ Followers</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl">LinkedIn</p>
            <p className="text-lg">522K+ Followers</p>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Herolinks;
