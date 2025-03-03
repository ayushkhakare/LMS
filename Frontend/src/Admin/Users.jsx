import React, { useState, useEffect } from "react";
import { Edit, Trash2,Pause } from "lucide-react";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [editUser, setEditUser] = useState(null); // Stores user details for editing
  const [showModal, setShowModal] = useState(false); // Controls modal visibility

  const API_URL = "http://localhost:3500/register";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      showMessage("Error fetching users", "error");
    }
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setUsers(users.filter((user) => user._id !== id));
        showMessage("User deleted successfully", "success");
      }
    } catch (error) {
      showMessage("Failed to delete user", "error");
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`${API_URL}/${editUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUser),
      });

      if (response.ok) {
        setUsers(users.map((user) => (user._id === editUser._id ? editUser : user)));
        showMessage("User updated successfully", "success");
        setShowModal(false);
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      showMessage("Failed to update user", "error");
    }
  };

  const handlePause = async (id, paused) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paused: !paused }), // Toggle pause status
      });

      if (response.ok) {
        setUsers(users.map((user) => (user._id === id ? { ...user, paused: !paused } : user)));
        showMessage(`User ${!paused ? "paused" : "resumed"} successfully`, "success");
      } else {
        throw new Error("Failed to update user status");
      }
    } catch (error) {
      showMessage("Failed to update user status", "error");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {message && (
        <div className={`fixed top-10 left-1/2 transform -translate-x-1/2 bg-${message.type === "success" ? "green" : "red"}-500 text-white px-4 py-2 rounded-md`}>{message.text}</div>
      )}
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-700">User Management</h1>

      <div className="max-w-4xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full p-2 border border-gray-300 rounded-md shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border p-3">ID</th>
              <th className="border p-3">Username</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">password</th>
              <th className="border p-3">Actions</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-100">
                <td className="border p-3">{user._id}</td>
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3">{user.password}</td>
                <td className="border p-3 flex gap-2">
                  <button className="text-green-500 p-2" onClick={() => handleEdit(user)}><Edit size={20} /></button>
                  <button className="text-red-500 p-2" onClick={() => handleDelete(user._id)}><Trash2 size={20} /></button>
                  <button className={`p-2 ${user.paused ? "text-blue-500" : "text-yellow-500"}`} onClick={() => handlePause(user._id, user.paused)}>
                    <Pause size={20} /> {user.paused ? "Resume" : "Pause"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
            <label className="block mb-2">Username:</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-3"
              value={editUser.name}
              onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            />
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md mb-3"
              value={editUser.email}
              onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
            />
            <label className="block mb-2">Password:</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md mb-3"
              value={editUser.password || ""}
              onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleSaveChanges}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
