import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      const userData = JSON.parse(auth);
      navigate(userData.role === "admin" ? "/adminlayout" : "/");
    }
  }, [navigate]);

  const submitData = useCallback(async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    console.log("Email:", email, "Password:", password, "Role:", role);

    const url =
      role === "admin"
        ? "http://localhost:3500/admin/login"
        : "http://localhost:3500/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      setLoading(false);

      if (!response.ok) {
        throw new Error(result.message || "Invalid credentials");
      }

      localStorage.setItem("user", JSON.stringify({ ...result, role }));
      navigate(role === "admin" ? "/adminlayout" : "/");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
      setLoading(false);
    }
  }, [email, password, role, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#0d1721] to-[#1a2940]">
      <h1 className="text-4xl font-extrabold text-indigo-300 mb-8 text-center">
        Welcome to ArrayLogic
      </h1>
      <h1 className="text-white  text-center text-pretty text-2xl">ArrayLogic is a leading IT training institute offering expert-led courses <br /> in software development, web technologies, and IT solutions to help <br /> students and professionals excel in the tech industry.</h1>
      <div className="flex w-3/4 bg-transparent bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
        {/* Left Side - Image */}
        <div className="w-1/2 p-5 flex justify-center items-center">
          <img
            src="/login.webp"
            alt="Login Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 px-8 py-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-300">
            📩 Login
          </h2>

          {error && <p className="text-red-400 text-center mb-4">{error}</p>}

          <form onSubmit={submitData} className="space-y-5">
            <div className="mb-4 flex justify-center gap-4">
              {["user", "admin"].map((type) => (
                <label
                  key={type}
                  className="flex items-center cursor-pointer text-white"
                >
                  <input
                    type="radio"
                    name="role"
                    value={type}
                    checked={role === type}
                    onChange={(e) => setRole(e.target.value)}
                    className="mr-2"
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>

            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-20 rounded-full font-bold text-sm shadow-md transition duration-300"
                disabled={loading}
              >
                {loading ? "Logging in..." : "📤 Login"}
              </button>
            </div>
          </form>

          <div className="mt-4 text-center text-white">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
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

export default Login;
