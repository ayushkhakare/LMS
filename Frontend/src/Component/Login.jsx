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

    const url = role === "admin"
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

      // Store user details in localStorage
      localStorage.setItem("user", JSON.stringify({ ...result, role }));

      // Navigate based on role
      navigate(role === "admin" ? "/adminlayout" : "/");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
      setLoading(false);
    }
  }, [email, password, role, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={submitData}>
          <div className="mb-4 flex justify-center gap-4">
            {["user", "admin"].map((type) => (
              <label key={type} className="flex items-center cursor-pointer">
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

          <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
          <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />

          <button
            type="submit"
            className={`w-full py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Field Component
const InputField = ({ label, type, value, onChange, required, autoComplete }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      required={required}
      autoComplete={autoComplete}
    />
  </div>
);

export default Login;
