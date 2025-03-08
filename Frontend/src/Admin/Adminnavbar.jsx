import React from "react";
import { NavLink } from "react-router-dom";
import { 
    Users, 
    Book, 
    FileText, 
    GraduationCap, 
    ClipboardCheck, 
    BarChart2, 
    Bell
} from "lucide-react";

function Adminnavbar() {
    return (
        <aside className="w-64 bg-gray-900 text-white p-5 shadow-lg h-screen">
            <h2 className="text-xl font-bold mb-6 text-center">Admin Panel</h2>
            <nav>
                <ul className="space-y-4">
                    <li>
                        <NavLink to="/users" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <Users size={20} />
                            <span>Users Manage</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/coursemanage" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <Book size={20} />
                            <span>Course Manage</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contentmanage" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <FileText size={20} />
                            <span>Content Manage</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/enrollmentmanage" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <GraduationCap size={20} />
                            <span>Enrollment Manage</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/examassesment" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <ClipboardCheck size={20} />
                            <span>Exam & Assessment Manage</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/report" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <BarChart2 size={20} />
                            <span> Reports & Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <Bell size={20} />
                            <span>Notifications & Announcements</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded">
                            <Bell size={20} />
                            <span>Setting</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Adminnavbar;