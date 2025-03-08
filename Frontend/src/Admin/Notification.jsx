import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  Users,
  Book,
  FileText,
  GraduationCap,
  ClipboardCheck,
  BarChart2,
  Bell,
  Trash2,
} from "lucide-react"; // Importing icons from Lucide React

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notifications from API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:3500/notification");
        if (response.data && Array.isArray(response.data.notifications)) {
          setNotifications(response.data.notifications);
        } else {
          console.error("Invalid API response:", response.data);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  // Delete a notification
  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/notification/${id}`);
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notif) => notif._id !== id)
      );
    } catch (error) {
      console.error("Error deleting notification:", error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800">
       <NavLink to='/adminlayout' className="text-white text-2xl pb-4 mb-4">Home</NavLink>
      <h2 className="text-3xl font-bold mb-6 text-center flex items-center gap-3 text-white">
        <Bell className="h-7 w-7 text-blue-600 animate-pulse" /> Admin Notification Panel
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading notifications...</p>
      ) : notifications.length === 0 ? (
        <p className="text-center text-gray-500">No notifications available.</p>
      ) : (
        <div className="space-y-5">
          {notifications.map((notif, index) => {
            if (!notif._id || !notif.message) return null; // Skip invalid notifications

            // Assign different icons based on index
            const icons = [Users, Book, FileText, GraduationCap, ClipboardCheck, BarChart2];
            const IconComponent = icons[index % icons.length];

            return (
              <div
                key={notif._id}
                className="flex items-center justify-between p-5 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <IconComponent className="h-7 w-7 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-gray-800">{notif.name || "No Name"}</p>
                    <p className="text-sm text-gray-500">{notif.email || "No Email"}</p>
                    <p className="font-semibold text-gray-700 mt-1">{notif.subject || "No Subject"}</p>
                    <p className="text-gray-600 mt-2">{notif.message}</p>
                    <span className="text-gray-400 text-sm mt-1 block">
                      {notif.createdAt
                        ? new Date(notif.createdAt).toLocaleString()
                        : "No Date Available"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => deleteNotification(notif._id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-transform transform hover:scale-110"
                >
                  <Trash2 className="h-6 w-6" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Notifications;
