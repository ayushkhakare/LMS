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
// import Contact from "./Page/Contact";
import Demolecture from "./Page/Demolecture";
import AdminRoutes from "./Admin/AdminRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:title" element={<CourseDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/freetest" element={<Freetest/>}/>
        <Route path="/taskpage" element={<Taskpage/>}/>
        <Route path="/payment" element={<Payment/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
        <Route path="/demolecture" element={<Demolecture/>}/>

        {/* add a private componet in this */}
        {/* <Route element={<PrivateComponent></PrivateComponent>}>
        
        </Route> */}
        <Route path="/*" element={<AdminRoutes />} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
