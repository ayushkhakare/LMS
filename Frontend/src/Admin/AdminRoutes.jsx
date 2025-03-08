import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateComponent from "../Component/PrivateComponent";
import Adminlayout from "./AdminLayout";
import Setting from "./Setting";
import Users from "./Users";
import Adminnavbar from "./Adminnavbar";
import Contentmanage from "./Contentmanage";
import Coursemanage from "./Coursemanage";
import Enrollmentmanage from "./Enrollmentmanage"
import Notification from "./Notification"
import Examassesment from "./Examassesment"
import Report from "./Report";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/adminnavbar" element={<Adminnavbar></Adminnavbar>}/>
            <Route element={<PrivateComponent/>}> {/* Protect all admin routes */}
                <Route path="/adminlayout" element={<Adminlayout />}></Route>
                <Route path="/contentmanage" element={<Contentmanage></Contentmanage>}/>
                <Route path="/coursemanage" element={<Coursemanage></Coursemanage>}/>
                <Route path="/enrollmentmanage" element={<Enrollmentmanage></Enrollmentmanage>}/>
                <Route path="/notification" element={<Notification></Notification>}/>
                <Route path="/examassesment" element={<Examassesment></Examassesment>}/>
                <Route path="/report" element={<Report/>}></Route>
                <Route path="/setting" element={<Setting/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
            </Route>
        </Routes>
    );
};

export default AdminRoutes;
