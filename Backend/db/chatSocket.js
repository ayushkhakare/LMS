const Message = require("./Message"); // ✅ Correct import path for Message model

const onlineUsers = {}; // Store online users { userId: [socketId1, socketId2] }

module.exports = (io) => {
    io.on("connection", async (socket) => {
        console.log("⚡ New User Connected:", socket.id);

        // Handle User Online (Support multiple logins per user)
        socket.on("userOnline", (userId) => {
            if (!onlineUsers[userId]) {
                onlineUsers[userId] = [];
            }
            onlineUsers[userId].push(socket.id);
            io.emit("updateUsers", Object.keys(onlineUsers)); // Emit active users
        });

        // Handle Message Sending (Public & Private)
        socket.on("sendMessage", async ({ user, text, recipient }) => {
            try {
                const newMessage = new Message({ user, text, recipient });
                await newMessage.save();

                if (recipient === "everyone") {
                    io.emit("receiveMessage", newMessage);
                } else {
                    // Send to All Active Sockets of the Recipient
                    if (onlineUsers[recipient]) {
                        onlineUsers[recipient].forEach((socketId) => {
                            io.to(socketId).emit("receiveMessage", newMessage);
                        });
                    }
                    // Send to Sender (So They Also See Their Own Message)
                    socket.emit("receiveMessage", newMessage);
                }
            } catch (error) {
                console.error("❌ Error Sending Message:", error);
            }
        });

        // Handle User Disconnection
        socket.on("disconnect", () => {
            console.log("🔌 User Disconnected:", socket.id);
            for (const userId in onlineUsers) {
                onlineUsers[userId] = onlineUsers[userId].filter((id) => id !== socket.id);
                if (onlineUsers[userId].length === 0) {
                    delete onlineUsers[userId]; // Remove user if no sockets left
                }
            }
            io.emit("updateUsers", Object.keys(onlineUsers));
        });
    });
};
