const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  user: String,
  text: String,
  recipient: String,
  timestamp: { type: Date, default: Date.now },
});

const Messages = mongoose.model("Messages", messageSchema);
module.exports = Messages; // Export the model
