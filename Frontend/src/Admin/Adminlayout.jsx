import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Adminnavbar from "./Adminnavbar";

function Adminlayout() {
    return (
        <div className="flex h-screen">
            <Adminnavbar /> {/* Sidebar stays on all pages */}
            <main className="flex-1 p-6 bg-gray-700">
                {/* <div className="bg-white shadow-md p-6 rounded-lg">
                  
                    <h1></h1>
                </div> */}
                <Outlet /> 

                {/* Navigation Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <NavLink 
                        to="/users"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-red-500 hover:bg-red-600 rounded-lg shadow-lg transition-all"
                    > Users Manage   
                    </NavLink>

                    <NavLink 
                        to="/coursemanage"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-lg transition-all"
                    >
                        Course Manage
                    </NavLink>

                    <NavLink 
                        to="/contentmanage"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-all"
                    >
                        Content Manage
                    </NavLink>

                    <NavLink 
                        to="/enrollmentmanage"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg transition-all"
                    >
                       Enrollment Manage
                    </NavLink>

                    <NavLink 
                        to="/examassesment"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition-all"
                    >
                       Exam & Assessment Manage
                    </NavLink>

                    <NavLink 
                        to="/report"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transition-all"
                    >
                       Reports & Analytics
                    </NavLink>

                    <NavLink 
                        to="/notification"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-teal-500 hover:bg-teal-600 rounded-lg shadow-lg transition-all"
                    >
                       Notifications & Announceme..
                    </NavLink>

                    <NavLink 
                        to="/setting"
                        className="block p-24 sm:p-12 text-white text-lg font-semibold text-center bg-pink-500 hover:bg-pink-600 rounded-lg shadow-lg transition-all"
                    >
                        Setting
                    </NavLink>
                </div>
            </main>
        </div>
    );
}

export default Adminlayout;
