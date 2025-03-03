import { NavLink } from "react-router-dom";

function Heroregister() {
  return (
    <div className="bg-[#0d1721] w-full h-120 flex flex-col items-start justify-center px-20 py-5">
      {/* Heading */}
      <h1 className="text-6xl font-semibold text-[#ffc0c7] leading-tight">
        Let's Start Your Career 
        with ArrayLogic
      </h1>

      {/* Subheading */}
      <p className="text-4xl text-[#ffc0c7] mt-12">
        Get certified by completing a course
      </p>
      <p className="text-3xl text-[#ffc0c7] mt-4">
          Free Demo Lecture Available
        </p>

      {/* Button */}
      <div className="mt-24">
        <NavLink
          to="/demolecture"
          className="bg-green-500 text-white text-lg px-24 py-5 rounded-md shadow-md hover:bg-green-600 transition"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
}

export default Heroregister;
