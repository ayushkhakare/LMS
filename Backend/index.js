const express=require('express');
const core=require('cors')
require('./db/config')

const Course=require('./db/Addcourse')
const User =require('./db/User')
const Admin =require('./db/Admin')
const Notification =require('./db/Notification')
const app = express();

app.use(express.json());
app.use(core());

  
// this is a create a new account
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
      let user = new User({ name, email, password }); // Use correct field names
      let result = await user.save();
      result = result.toObject();
      delete result.password; // Remove password from response
  
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });


// this is a user login 
app.post('/login',async(req,res)=>{
    if(req.body.password && req.body.email){
       
        let user= await User.findOne(req.body).select("-password")
     if(user){
        res.send(user)
     }
     else{
        res.send("no user found")
     }
    }
    else{
        res.send("no user found")
     }  
})


// this is a admin login
app.post("/admin/login", async (req, res) => {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email, password }).select("-password");

    if (!admin) {
        return res.status(400).json({ message: "Invalid admin credentials" });
    }

    res.json(admin);
});


// show all user data
app.get("/register", async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from MongoDB
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

// delate a user
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


//update user
app.put("/register/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const updatedFields = { name, email, password }; // Update all fields

        const updatedUser = await User.findByIdAndUpdate(
            id,
            updatedFields,
            { new: true, runValidators: true } // Return updated document and validate changes
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
});

// paused login

app.put("/register/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { paused } = req.body; // Get pause status

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { paused }, // Update the "paused" field
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

// this is a add a new course
app.post("/addcourse",async (req,res)=>{
    let course =new Course(req.body);
    let result= await course.save();
    res.send(result);

})

// this is a fetch a course from data base
app.get("/addcourse", async (req, res) => {
    try {
        const courses = await Course.find(); // Fetch all courses
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error });
    }
    
});

// update the course

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

// delate this course
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

// user massage send to database

app.post('/notification', async (req, res) => { 
    try {
        const newNotification = new Notification(req.body); // Create a new instance
        await newNotification.save(); // Save to the database
        res.status(201).json({ message: 'Notification saved successfully!' });
    } catch (error) {
        console.error('Error saving notification:', error); // Log error for debugging
        res.status(500).json({ error: 'Failed to save notification', details: error.message });
    }
});

// GET endpoint to fetch notifications
app.get('/notification', async (req, res) => {
    try {
        const notifications = await Notification.find(); // Fetch all notifications
        res.json({ success: true, notifications });
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch notifications' });
    }
});

//delate a notifiaction
app.delete('/notification/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Notification.findByIdAndDelete(id); // Delete notification
        res.json({ success: true, message: 'Notification deleted' });
    } catch (error) {
        console.error('Error deleting notification:', error);
        res.status(500).json({ success: false, error: 'Failed to delete notification' });
    }
});



app.listen(3500);

