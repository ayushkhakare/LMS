const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,  // Automatically set the current date if not provided
    },
    author: {
        type: String,
        required: true,
        default: "Arrayalogic Academy", // Default author if not specified
    },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
