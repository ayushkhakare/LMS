import React from "react";
import { NavLink } from "react-router-dom";

function ContentManage() {
    // Sample data for content management
    const contentData = [
        { id: 1, title: "React Basics", type: "Video", status: "Published" },
        { id: 2, title: "JavaScript ES6", type: "Article", status: "Draft" },
        { id: 3, title: "CSS Flexbox", type: "Video", status: "Published" },
        { id: 4, title: "SQL Queries", type: "Article", status: "Pending Review" },
    ];

    return (
        <div className="p-6 bg-gray-700 min-h-screen text-white">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold">Manage Content</h1>
                <NavLink to="/adminlayout" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow">
                    Back to Dashboard
                </NavLink>
            </div>

            {/* Content Table */}
            <div className="overflow-x-auto">
                <table className="w-full bg-gray-800 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-900 text-left">
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Type</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contentData.map((item) => (
                            <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-600">
                                <td className="px-4 py-3">{item.title}</td>
                                <td className="px-4 py-3">{item.type}</td>
                                <td className={`px-4 py-3 font-semibold ${item.status === "Published" ? "text-green-400" : item.status === "Draft" ? "text-yellow-400" : "text-orange-400"}`}>
                                    {item.status}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md mr-2">
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContentManage;
