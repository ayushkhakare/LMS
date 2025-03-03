import React, { useState } from "react";

function Setting() {
    // State to hold setting data
    const [settings, setSettings] = useState({
        siteTitle: "My App",
        notificationsEnabled: true,
        maxUsers: 100,
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the setting submission logic here (e.g., API call)
        console.log("Settings updated:", settings);
    };

    return (
        <>
            <h1 className="text-2xl font-semibold mb-6">Admin Settings</h1>

            {/* Settings Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Site Title */}
                    <div>
                        <label htmlFor="siteTitle" className="block text-lg font-medium mb-2">
                            Site Title
                        </label>
                        <input
                            type="text"
                            id="siteTitle"
                            name="siteTitle"
                            value={settings.siteTitle}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Max Users */}
                    <div>
                        <label htmlFor="maxUsers" className="block text-lg font-medium mb-2">
                            Max Users
                        </label>
                        <input
                            type="number"
                            id="maxUsers"
                            name="maxUsers"
                            value={settings.maxUsers}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Enable Notifications */}
                    <div>
                        <label htmlFor="notificationsEnabled" className="block text-lg font-medium mb-2">
                            Enable Notifications
                        </label>
                        <input
                            type="checkbox"
                            id="notificationsEnabled"
                            name="notificationsEnabled"
                            checked={settings.notificationsEnabled}
                            onChange={handleInputChange}
                            className="h-6 w-6 border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Setting;
