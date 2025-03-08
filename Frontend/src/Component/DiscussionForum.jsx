// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaPaperPlane, FaTrash } from "react-icons/fa";
// import { io } from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:3500"); // Update this to match your backend URL

// function DiscussionForum() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [username, setUsername] = useState(localStorage.getItem("username") || "");
//   const [tempUsername, setTempUsername] = useState("");
//   const [users, setUsers] = useState([]);
//   const [typingUser, setTypingUser] = useState("");
//   const [chatMode, setChatMode] = useState("everyone"); // "everyone" or "private"
//   const [selectedUser, setSelectedUser] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//       socket.emit("join", storedUsername);
//     }

//     axios.get("http://localhost:3500/messages")
//       .then(response => setMessages(response.data))
//       .catch(error => console.error("Error fetching messages:", error));

//     socket.on("receiveMessage", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//       playNotificationSound();
//     });

//     socket.on("updateUsers", (userList) => {
//       setUsers(userList);
//     });

//     socket.on("messageDeleted", (id) => {
//       setMessages((prevMessages) => prevMessages.filter(msg => msg._id !== id));
//     });

//     socket.on("typing", (user) => {
//       setTypingUser(user);
//       setTimeout(() => setTypingUser(""), 2000);
//     });

//     return () => {
//       socket.off("receiveMessage");
//       socket.off("updateUsers");
//       socket.off("messageDeleted");
//       socket.off("typing");
//     };
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     return () => {
//       if (username) {
//         socket.emit("disconnectUser", username);
//       }
//     };
//   }, [username]);

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== "" && username.trim() !== "") {
//       const message = {
//         user: username,
//         text: newMessage,
//         timestamp: new Date().toLocaleTimeString(),
//         recipient: chatMode === "private" && selectedUser ? selectedUser : "everyone",
//       };
//       socket.emit("sendMessage", message);
//       setNewMessage("");
//     }
//   };

//   const handleDeleteMessage = (id) => {
//     axios
//       .delete(`http://localhost:3500/messages/${id}`, { data: { username } })
//       .then(() => {
//         socket.emit("deleteMessage", id);
//       })
//       .catch((error) => console.error("Error deleting message:", error));
//   };

//   const handleTyping = () => {
//     socket.emit("typing", username);
//   };

//   const playNotificationSound = () => {
//     const audio = new Audio("/notificationn.mp3"); // Ensure the file exists in public folder
//     audio.play();
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-10 px-6 flex flex-col items-center">
//       <h1 className="text-3xl font-extrabold text-[#ffc0c7] mb-6 text-center">
//         💬 Chat Room & Discussion Forum 💬
//       </h1>

//       {!username ? (
//         <div className="mb-4 flex items-center space-x-2">
//           <input
//             type="text"
//             className="p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
//             placeholder="Enter your username..."
//             value={tempUsername}
//             onChange={(e) => setTempUsername(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
//             onClick={() => {
//               if (tempUsername.trim() !== "") {
//                 setUsername(tempUsername);
//                 localStorage.setItem("username", tempUsername);
//                 socket.emit("join", tempUsername);
//               }
//             }}
//           >
//             Set Username
//           </button>
//         </div>
//       ) : (
//         <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-[75vh]">
//           {/* Online Users List */}
//           <div className="mb-4">
//             <label className="text-gray-400">Online Users:</label>
//             <ul className="text-green-400">
//               {users.map((user) => (
//                 <li key={user}>{user}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Chat Mode Selection */}
//           <div className="mb-4">
//             <label className="text-gray-400">Chat Mode:</label>
//             <select
//               className="ml-2 p-2 bg-gray-700 rounded-lg text-white"
//               value={chatMode}
//               onChange={(e) => {
//                 setChatMode(e.target.value);
//                 setSelectedUser("");
//               }}
//             >
//               <option value="everyone">Chat with Everyone</option>
//               <option value="private">Private Chat</option>
//             </select>
//           </div>

//           {/* Typing Indicator */}
//           {typingUser && <p className="text-yellow-400">{typingUser} is typing...</p>}

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto space-y-3 p-3 scrollbar-thin scrollbar-thumb-gray-700">
//             {messages
//               .filter(msg => msg.recipient === "everyone" || msg.recipient === username || msg.user === username)
//               .map((msg) => (
//                 <motion.div
//                   key={msg._id}
//                   className={`p-3 rounded-lg shadow-md flex justify-between items-center max-w-xs ${msg.user === username ? "ml-auto bg-blue-500 text-white" : "mr-auto bg-gray-700 text-gray-300"}`}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div>
//                     <strong className="block text-yellow-400">{msg.user} {msg.recipient !== "everyone" && <span className="text-sm text-red-400">(Private)</span>}</strong>
//                     <span>{msg.text} <small className="block text-gray-400">{msg.timestamp}</small></span>
//                   </div>
//                   {msg.user === username && (
//                     <button className="text-red-400 hover:text-red-600 ml-2" onClick={() => handleDeleteMessage(msg._id)}>
//                       <FaTrash />
//                     </button>
//                   )}
//                 </motion.div>
//               ))}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Field & Send Button */}
//           <div className="mt-4 flex items-center bg-gray-700 rounded-lg p-2">
//             <input
//               type="text"
//               className="flex-1 bg-transparent text-white px-3 py-2 focus:outline-none"
//               placeholder="Type a message..."
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//               onInput={handleTyping}
//             />
//             <button
//               className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex items-center"
//               onClick={handleSendMessage}
//               disabled={chatMode === "private" && !selectedUser}
//             >
//               <FaPaperPlane />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DiscussionForum;