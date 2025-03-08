import React, { useState } from "react";
import { FaSun, FaMoon, FaPalette, FaBell, FaEnvelope } from "react-icons/fa";

function Setting() {
    // State to manage settings
    const [settings, setSettings] = useState({
        siteTitle: "My App",
        maxUsers: 100,
        darkMode: false,
        themeColor: "blue",
        notificationsEnabled: true,
        emailNotifications: false,
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Settings:", settings);
        alert("Settings saved successfully!");
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-${settings.themeColor}-400 to-${settings.themeColor}-600`}>
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-xl">
                {/* Page Title */}
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Admin Settings
                </h1>

                {/* Settings Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Site Title */}
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                        <label htmlFor="siteTitle" className="text-lg font-medium text-gray-700 flex-grow">
                            Site Title
                        </label>
                        <input
                            type="text"
                            id="siteTitle"
                            name="siteTitle"
                            value={settings.siteTitle}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Max Users */}
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                        <label htmlFor="maxUsers" className="text-lg font-medium text-gray-700 flex-grow">
                            Max Users
                        </label>
                        <input
                            type="number"
                            id="maxUsers"
                            name="maxUsers"
                            value={settings.maxUsers}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Theme Selection */}
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                        <FaPalette className="text-gray-500 mr-3" />
                        <label className="text-lg font-medium text-gray-700 flex-grow">
                            Theme Color
                        </label>
                        <select
                            name="themeColor"
                            value={settings.themeColor}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="purple">Purple</option>
                            <option value="red">Red</option>
                        </select>
                    </div>

                    {/* Dark Mode Toggle */}
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                        {settings.darkMode ? <FaMoon className="text-gray-500 mr-3" /> : <FaSun className="text-gray-500 mr-3" />}
                        <label className="text-lg font-medium text-gray-700 flex-grow">
                            Dark Mode
                        </label>
                        <input
                            type="checkbox"
                            name="darkMode"
                            checked={settings.darkMode}
                            onChange={handleInputChange}
                            className="h-6 w-6 cursor-pointer"
                        />
                    </div>

                    {/* Enable Notifications */}
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                        <FaBell className="text-gray-500 mr-3" />
                        <label className="text-lg font-medium text-gray-700 flex-grow">
                            Enable Push Notifications
                        </label>
                        <input
                            type="checkbox"
                            name="notificationsEnabled"
                            checked={settings.notificationsEnabled}
                            onChange={handleInputChange}
                            className="h-6 w-6 cursor-pointer"
                        />
                    </div>

                    {/* Enable Email Notifications */}
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center">
                        <FaEnvelope className="text-gray-500 mr-3" />
                        <label className="text-lg font-medium text-gray-700 flex-grow">
                            Enable Email Notifications
                        </label>
                        <input
                            type="checkbox"
                            name="emailNotifications"
                            checked={settings.emailNotifications}
                            onChange={handleInputChange}
                            className="h-6 w-6 cursor-pointer"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className={`w-full bg-${settings.themeColor}-500 text-white py-3 rounded-md hover:bg-${settings.themeColor}-600 transition-all font-semibold`}
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Setting;
