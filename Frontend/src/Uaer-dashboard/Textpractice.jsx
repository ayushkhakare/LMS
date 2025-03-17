import React from "react";
import Usernavbar from "./Usernavbar";

function Textpractice() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <div className="flex flex-col  w-64 min-h-screen p-6 shadow-lg">
        <Usernavbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Text Practice
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          This is a sample text practice component.
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        {/* List */}
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Learn React</li>
          <li>Practice Tailwind CSS</li>
          <li>Build awesome projects</li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Start Practicing
        </button>
      </div>
    </div>
  );
}

export default Textpractice;