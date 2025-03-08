const express = require('express');
const cors = require('cors');
const http = require('http'); // Required for WebSockets
const { Server } = require('socket.io'); // Required for WebSockets
require('./db/config');
const mongoose = require("mongoose");


const Course = require('./db/Addcourse');
const User = require('./db/User');
const Admin = require('./db/Admin');
const Notification = require('./db/Notification');
const chatSocket = require('./db/chatSocket'); // ✅ Import WebSocket Chat System
const Message = require('./db/Message'); 
const Purchase =require('./db/Buy');
const Exam =require('./db/Exam');
const cron = require('node-cron');
const Blog =require('./db/Blog');

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins (Modify for security)
        methods: ["GET", "POST"],
    },
});

app.use(express.json());
app.use(cors());


// API to get all blogs
app.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs", error });
    }
});

// ✅ API to get a single blog by ID
app.get("/blogs/:id", async (req, res) => {
    try {
        const { id } = req.params;

        console.log("Received Blog ID:", id); // Debugging

        // ✅ Ensure ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Blog ID format" });
        }

        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.json(blog);
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});





// API to add a new blog
app.post("/blogs", async (req, res) => {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
});


// ✅ Get all exams
app.get("/exam", async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Get a single exam by ID
app.get("/exam/:id", async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.json(exam);
  } catch (error) {
    res.status(400).json({ message: "Invalid Exam ID", error });
  }
});

// ✅ Add a new exam with multiple questions
app.post("/exam", async (req, res) => {
  try {
    const { title, subject, questions } = req.body;

    if (!title || !subject || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ message: "Title, Subject, and at least one question are required." });
    }

    const formattedQuestions = questions.map(q => ({
      ...q,
      questionID: new mongoose.Types.ObjectId(),
    }));

    const newExam = new Exam({ title, subject, questions: formattedQuestions });
    await newExam.save();

    res.status(201).json(newExam);
  } catch (error) {
    console.error("Error saving exam:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

// ✅ Update an exam
app.put("/exam/:id", async (req, res) => {
  try {
    const updatedExam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedExam) return res.status(404).json({ message: "Exam not found" });
    res.json(updatedExam);
  } catch (error) {
    res.status(400).json({ message: "Error updating exam", error });
  }
});

// ✅ Update a specific question
app.put("/exam/:examId/question/:questionId", async (req, res) => {
  try {
    const { examId, questionId } = req.params;
    const { questionText } = req.body;

    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    const question = exam.questions.id(questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });

    question.questionText = questionText;
    await exam.save();

    res.status(200).json({ message: "Question updated successfully", exam });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ Delete an exam
app.delete("/exam/:id", async (req, res) => {
  try {
    const deletedExam = await Exam.findByIdAndDelete(req.params.id);
    if (!deletedExam) return res.status(404).json({ message: "Exam not found" });
    res.json({ message: "Exam deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting exam", error });
  }
});

// ✅ Delete an option from a question
app.delete("/exam/:examId/question/:questionId/option/:optionId", async (req, res) => {
  const { examId, questionId, optionId } = req.params;

  try {
    const exam = await Exam.findById(examId);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    const question = exam.questions.id(questionId);
    if (!question) return res.status(404).json({ message: "Question not found" });

    question.options = question.options.filter(opt => opt._id.toString() !== optionId);
    await exam.save();

    res.status(200).json({ message: "Option deleted successfully", exam });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Purchase a course
app.post("/purchases", async (req, res) => {
    try {
        const { userId, courseId } = req.body;

        console.log("Received purchase request:", req.body);

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            console.log("User not found:", userId);
            return res.status(404).json({ message: "User not found" });
        }

        // Find the course
        const course = await Course.findById(courseId);
        if (!course) {
            console.log("Course not found:", courseId);
            return res.status(404).json({ message: "Course not found" });
        }

        console.log("Fetched course title:", course.title);  // ✅ Debugging log

        // ✅ Use `title` instead of `courseName`
        const newPurchase = new Purchase({
            userId,
            userName: user.name,
            courseId,
            courseName: course.title,  // ✅ Fix here
            price: course.price,
            purchaseDate: new Date(),
            status: "completed"
        });

        await newPurchase.save();
        res.status(201).json({ message: "Purchase successful", newPurchase });
    } catch (error) {
        console.error("Error creating purchase:", error);
        res.status(500).json({ message: "Error creating purchase", error: error.message });
    }
});




app.get('/purchases', async (req, res) => {
    try {
        const purchases = await Purchase.find(); // Ensure Purchase model is correctly imported
        res.json(purchases);
    } catch (error) {
        console.error("Error fetching purchases:", error);
        res.status(500).json({ message: "Server Error: Unable to fetch purchases" });
    }
});




app.delete('/purchases/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPurchase = await Purchase.findByIdAndDelete(id);

        if (!deletedPurchase) {
            return res.status(404).json({ message: "Purchase not found" });
        }

        res.status(200).json({ message: "Purchase deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting purchase", error });
    }
});

// auto delate logic
cron.schedule('0 0 * * *', async () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() - 30); // Delete purchases older than 30 days

    try {
        const result = await Purchase.deleteMany({ purchaseDate: { $lt: expirationDate } });
        console.log(`${result.deletedCount} expired purchases deleted successfully`);
    } catch (error) {
        console.error("Error deleting expired purchases:", error);
    }
});




// ✅ Initialize WebSocket Chat System
chatSocket(io);

app.get("/messages", async (req, res) => {
    try {
      const messages = await Message.find(); // Fetch messages from DB
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Server error fetching messages" });
    }
  });
  
  app.delete("/messages/:id", async (req, res) => {
    const { id } = req.params;
    const { username } = req.body; // The user trying to delete the message

    try {
        const message = await Message.findById(id);
        if (!message) {
            return res.status(404).json({ error: "Message not found" });
        }

        // Check if the user deleting the message is the sender
        if (message.user !== username) {
            return res.status(403).json({ error: "Unauthorized to delete this message" });
        }

        await Message.findByIdAndDelete(id);
        io.emit("messageDeleted", id); // ✅ Fix: Use io instead of socket
        res.json({ success: true });
    } catch (error) {
        console.error("Error deleting message:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

  
  
// ---------------------- //
// 🚀 User Authentication APIs //
// ---------------------- //

// ✅ Register a new user
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                message: "Email already registered. Please use another email.",
            });
        }

        // Create a new user
        let user = new User({ name, email, password });
        let result = await user.save();
        result = result.toObject();
        delete result.password; // Remove password from response

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// ✅ User Login
app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.status(400).json({ message: "No user found" });
        }
    } else {
        res.status(400).json({ message: "Invalid credentials" });
    }
});

// ✅ Admin Login
app.post("/admin/login", async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email, password }).select("-password");

    if (!admin) {
        return res.status(400).json({ message: "Invalid admin credentials" });
    }

    res.json(admin);
});

// ✅ Show all users
app.get("/register", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

// ✅ Delete a user
app.delete("/register/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
});

// ✅ Update user
app.put("/register/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, password },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
});

// ✅ Pause/Resume User Login
app.put("/register/:id/pause", async (req, res) => {
    try {
        const { id } = req.params;
        const { paused } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { paused },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: `User ${paused ? "paused" : "resumed"} successfully`, user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user status", error });
    }
});

// ---------------------- //
// 🚀 Course APIs //
// ---------------------- //

// ✅ Add a new course
app.post("/addcourse", async (req, res) => {
    try {
        let course = new Course(req.body);
        let result = await course.save();
        res.send(result);
    } catch (error) {
        res.status(500).json({ message: "Error adding course", error });
    }
});

// ✅ Fetch all courses
app.get("/addcourse", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error });
    }
});

// ✅ Update a course
app.put("/addcourse/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.json({ message: "Course updated successfully", course: updatedCourse });
    } catch (error) {
        res.status(500).json({ message: "Error updating course", error });
    }
});

// ✅ Delete a course
app.delete("/addcourse/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await Course.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting course", error });
    }
});

// ---------------------- //
// 🚀 Notification APIs //
// ---------------------- //

// ✅ Send a notification
app.post('/notification', async (req, res) => {
    try {
        const newNotification = new Notification(req.body);
        await newNotification.save();
        res.status(201).json({ message: 'Notification saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save notification', details: error.message });
    }
});

// ✅ Fetch notifications
app.get('/notification', async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.json({ success: true, notifications });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to fetch notifications' });
    }
});

// ✅ Delete a notification
app.delete('/notification/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Notification.findByIdAndDelete(id);
        res.json({ success: true, message: 'Notification deleted' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to delete notification' });
    }
});

// ---------------------- //
// 🚀 Start Server //
// ---------------------- //

server.listen(3500, () => {
    console.log("🚀 Server running on port 3500");
});
