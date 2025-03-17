import { NavLink } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineBook, AiOutlineFileText, AiOutlineRead, AiOutlineSolution, AiOutlineTrophy } from "react-icons/ai";

function Usernavbar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="bg-gray-100 w-64 h-full p-6">
        <ul className="flex flex-col space-y-4 text-xl text-black">
          <li>
            <NavLink
              to="/userdashboard"
              className="hover:underline text-green-700 transition-all p-2 rounded-md cursor-pointer flex items-center gap-2"
            >
              <AiOutlineDashboard /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mylearning"
              className="hover:underline transition-all p-2 rounded-md cursor-pointer flex items-center gap-2"
            >
              <AiOutlineBook /> My Learning
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/textpractice"
              className="hover:underline transition-all p-2 rounded-md cursor-pointer flex items-center gap-2"
            >
              <AiOutlineFileText /> Practice Tests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exam"
              className="hover:underline transition-all p-2 rounded-md cursor-pointer flex items-center gap-2"
            >
              <AiOutlineRead /> Exams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interview"
              className="hover:underline transition-all p-2 rounded-md cursor-pointer flex items-center gap-2"
            >
              <AiOutlineSolution /> Interview Prep
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/challanges"
              className="hover:underline transition-all p-2 rounded-md cursor-pointer flex items-center gap-2"
            >
              <AiOutlineTrophy /> Challenges
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Usernavbar;
