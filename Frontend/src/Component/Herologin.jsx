import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBook, FaPlayCircle, FaRocketchat, FaGoogle, FaGithub } from "react-icons/fa"; // React icons for Learn, Apply, and Grow

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmCyKyXWZdEJiS7dScfcHxrgg4XyFKiRg",
  authDomain: "arraylogic-learning-management.firebaseapp.com",
  projectId: "arraylogic-learning-management",
  storageBucket: "arraylogic-learning-management.appspot.com",
  messagingSenderId: "932639575608",
  appId: "1:932639575608:web:9ad82977c581c9fd9ae0cd",
  measurementId: "G-0BBZQMP62E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configure Google and GitHub providers
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const githubProvider = new GithubAuthProvider();

// Authentication functions
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google User:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Login Error:", error);
  }
};

const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    console.log("GitHub User:", result.user);
    return result.user;
  } catch (error) {
    console.error("GitHub Login Error:", error);
  }
};

function Herologin() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate("/"); // Redirect after successful login
    }
  };

  const handleGithubLogin = async () => {
    const user = await signInWithGithub();
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0d1721] to-[#1a2940] min-h-screen flex flex-col items-center justify-center px-6">
      {/* Heading and Paragraph Outside Grid - Centered */}
      <div className="text-center mb-8 w-full">
        <h2 className="text-3xl font-extrabold text-white">
          Kickstart Your Coding Journey with <span className="text-blue-600">ArrayLogic</span>
        </h2>
        <p className="text-white mt-4">
          Start your journey today by logging in or signing up to explore courses, build projects, and elevate your career.
        </p>
      </div>

      <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        
        {/* Left Grid: Information Section */}
        <div className=" h-150 p-6 rounded-lg shadow-2xl flex flex-col lg:gap-30 md:gap-20 mt-6">
          {/* Learn Section */}
          <div className="flex items-center gap-3 text-white">
            <FaBook className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">Learn: Access 100+ Courses</h2>
              <p className="text-md">Unlock knowledge with CodeHelp's Learn. Dive into 100+ courses led by top instructors.</p>
            </div>
          </div>

          {/* Apply Section */}
          <div className="flex items-center gap-4 text-white">
            <FaPlayCircle className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">Apply: Build, Play, Create</h2>
              <p className="text-md">Bring ideas to life in CodeHelp's Apply. Build projects, play in boot playgrounds—all in your browser.</p>
            </div>
          </div>

          {/* Grow Section */}
          <div className="flex items-center gap-4 text-white">
            <FaRocketchat className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">Grow: Elevate Your Career</h2>
              <p className="text-md">Climb with CodeHelp's Grow. Upskill through CodeHelp and achieve career success.</p>
            </div>
          </div>
        </div>

        {/* Right Grid: Registration Form */}
        <div className=" h-100 bg-gradient-to-r from-[#4b6584] to-[#2c3e50] p-6 rounded-lg shadow-2xl mt-20">
          
          {/* Auth Buttons */}
          <div className="mt-6 flex flex-col gap-6">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105 cursor-pointer focus:outline-none"
            >
              <FaGoogle className="mr-3 text-xl" /> Continue with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-transform transform hover:scale-105 cursor-pointer focus:outline-none"
            >
              <FaGithub className="mr-3 text-xl" /> Continue with GitHub
            </button>
          </div>

          {/* Email Login */}
          <div className="mt-8 text-center">
            <p className="text-white">OR Register/Login with email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-3 rounded-md w-full text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition mt-4"
            />
            <p className="text-white mt-4">
              Don't have an account?{" "}
              <NavLink
                to="/login"
                className="text-blue-600 font-semibold cursor-pointer hover:underline"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herologin;
