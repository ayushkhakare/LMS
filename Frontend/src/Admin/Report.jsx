import React from "react";
import { NavLink } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    LineElement, 
    PointElement, // ✅ Register this
    Title, 
    Tooltip, 
    Legend 
} from "chart.js";

// Register all necessary elements
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function Report() {
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Revenue ($)",
                data: [4000, 5000, 4500, 6000, 7000, 7500],
                backgroundColor: "rgba(75, 192, 192, 0.7)",
            },
        ],
    };

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "New Enrollments",
                data: [50, 70, 60, 90, 100, 110],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                fill: true,
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-700 min-h-screen text-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold">Reports & Analytics</h1>
                <NavLink to="/adminlayout" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                    Back to Dashboard
                </NavLink>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-5 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Revenue Growth</h2>
                    <Bar data={barData} />
                </div>
                <div className="bg-gray-900 p-5 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">User Enrollments</h2>
                    <Line data={lineData} />
                </div>
            </div>
        </div>
    );
}

export default Report;
