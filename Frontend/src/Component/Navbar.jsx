import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-cyan-100/70">
      {/* Logo */}
      <NavLink to="/">
        <img src="/logo.png" alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
      </NavLink>

      {/* Navigation Links */}
      <div className="md:flex hidden items-center gap-5 text-gray-500">
        
        {!auth ? (
          <>
            <NavLink 
              to="/login" 
              className={({ isActive }) => 
                `transition duration-300 ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`
              }
            >
              Login
            </NavLink>
            <NavLink 
              to="/signup" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </NavLink>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition duration-300 cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
