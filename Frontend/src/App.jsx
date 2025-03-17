import Home from "./Home";
import Createaccount from "./Component/Createaccount";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Page/Course";
import CourseDetail from "./Page/CourseDetail";
import Signup from "./Page/Signup";
import Footer from "./Component/Footer";
import Freetest from "./Page/FreeTest";
import Taskpage from "./Page/Taskpage";
import Payment from "./Page/Payment";
import Demolecture from "./Page/Demolecture";
import AdminRoutes from "./Admin/AdminRoutes";
import Privacypolicy from "./Component/PrivacyPolicy";
import Termservice from "./Component/Teamservice";
import Contact from "./Page/Contact";
import BlogPage from "./Component/BlogPage";
import BlogDetails from "./Component/BlogDetails";
import UserPrivateRoute from "./Component/UserPrivateRoute";
import Userdashboard from "./Uaer-dashboard/Userdashboard";
import Mylearning from "./Uaer-dashboard/Mylearning";
import Textpractice from "./Uaer-dashboard/Textpractice";
import Exam from "./Uaer-dashboard/Exam";
import Interview from "./Uaer-dashboard/Interview";
import Challenges from "./Uaer-dashboard/Challenges";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes (Accessible to Everyone) */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:title" element={<CourseDetail />} />
        <Route path="/freetest" element={<Freetest />} />
        <Route path="/taskpage" element={<Taskpage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/teamservice" element={<Termservice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demolecture" element={<Demolecture />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/blogpage/:id" element={<BlogDetails />} />

        {/* Admin Routes */}
        <Route path="/*" element={<AdminRoutes />} />

        {/* Private Route for Logged-in Users */}
        <Route element={<UserPrivateRoute />}>
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/mylearning" element={<Mylearning/>}/> 
          <Route path="/textpractice" element={<Textpractice/>}/>
          <Route path="/exam" element={<Exam/>}/>
          <Route path="/interview" element={<Interview/>}/>
          <Route path="/challanges" element={<Challenges/>}/>
          </Route>


        {/* Catch-All Route to Prevent Unauthorized Access */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
