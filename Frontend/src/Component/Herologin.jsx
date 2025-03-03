import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

// Replace these with your actual Firebase configuration details
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

// Configure Google provider with custom parameters to force account selection
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Configure GitHub provider
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
    <div className="bg-gray-600 min-h-screen flex items-center justify-center px-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        {/* Hero Section */}
        <div className="text-center ">
          <h1 className="text-3xl font-extrabold text-white">
            Kickstart Your Coding Expedition with{" "}
            <span className="text-blue-600">ArrayLogic</span>
          </h1>
          <p className="text-md text-white mt-4">
            Set sail on your coding voyage with ArrayLogic—a platform that guides you through the fundamentals, sparking curiosity and laying the foundation for a successful coding journey.
          </p>
        </div>

        {/* Auth Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition transform hover:scale-105 cursor-pointer"
          >
            Continue with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition transform hover:scale-105 cursor-pointer"
          >
            Continue with GitHub
          </button>
        </div>

        {/* Email Login */}
        <div className="mt-6 text-center">
          <p className="text-white">OR Register/Login with email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md w-full text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition mt-3"
          />
          <p className="text-white mt-3">
            Don't have an account?{" "}
            <NavLink to="/login" className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herologin;
