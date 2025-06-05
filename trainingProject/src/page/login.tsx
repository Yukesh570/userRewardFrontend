import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://192.168.10.4:3000/api/auth/login", {
        username,
        password,
      },
     { withCredentials: true } 
    );
      login(res.data.token);
      navigate("/")
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm space-y-6 border border-white/40"
      >
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/userReward.jpeg"
            alt="Website logo"
            className="w-[60px] h-[60px] rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500">Please login to continue</p>
        </div>

        {/* Username Input */}
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-purple-400" />
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-blue-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-red-500 text-center font-medium">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-md hover:from-purple-600 hover:to-blue-600 transition duration-200 shadow-md"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600">
          Don't have an account?
          <a
            href="/signUp"
            className="text-purple-600 hover:underline ml-1"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
