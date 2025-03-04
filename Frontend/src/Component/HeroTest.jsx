import React from "react";
import { NavLink } from "react-router-dom";


function HeroTest() {
  return (
    <div className="h-80  bg-[#0d1721] text-white flex flex-col items-center justify-center space-y-6 text-center">
      <div>
        <p className="text-4xl font-semibold text-white">Exercises and Quizzes</p>
        <p className="text-lg">Test your skills!</p>
      </div>
      
      <div className="flex space-x-6">
        <NavLink 
          to="/freetest" 
          className="px-12 py-6 text-xl bg-[#04aa6d] rounded-lg text-white font-semibold hover:bg-green-700 transition"
        >
          Let's Test Your Knowledge
        </NavLink>

        <NavLink 
          to="/taskpage" 
          className="px-12 py-6 text-xl bg-[#fff4a3] rounded-lg text-black font-semibold hover:bg-[#dfd26d] transition"
        >
          let's Solve Some Task
        </NavLink>
      </div>
    
    </div>
  
  );
}

export default HeroTest;
