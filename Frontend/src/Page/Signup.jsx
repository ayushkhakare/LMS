import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("All fields are required!");
      return;
    }

    try {
      let response = await fetch("http://localhost:3500/register", {
        method: "POST",
        body: JSON.stringify({ name: username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      let result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message || "Registration failed. Try again.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      setErrorMessage("Server error! Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-[#0d1721] to-[#1a2940]">
      <h1 className="text-4xl font-extrabold text-indigo-300 mb-6">Welcome to ArrayLogic</h1>
      <h1 className="text-white  text-center text-pretty text-2xl">ArrayLogic is a leading IT training institute offering expert-led courses <br /> in software development, web technologies, and IT solutions to help <br /> students and professionals excel in the tech industry.</h1>
      <div className="flex bg-transparent bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg w-3/4">
        {/* Left Side - Image */}
        <div className="w-1/2 p-5 flex justify-center">
          <img src="/login.webp" alt="Signup Illustration" className="max-w-full h-auto rounded-lg" />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 px-8 py-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">📝 Sign Up</h2>
          
          {errorMessage && <p className="text-red-400 text-center mb-4">{errorMessage}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" />
            <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-20 rounded-full font-bold text-sm shadow-md transition duration-300"
              >
                📝 Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Field Component
const InputField = ({ label, type, value, onChange, required, autoComplete }) => (
  <div className="mb-4">
    <label className="block text-white">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full text-white p-3 bg-transparent border-b border-indigo-400 focus:ring-indigo-300 outline-none text-lg"
      required={required}
      autoComplete={autoComplete}
    />
  </div>
);

export default Signup;