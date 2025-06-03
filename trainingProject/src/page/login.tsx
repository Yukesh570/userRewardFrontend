import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../auth/authContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      login(res.data.token, res.data.expiresIn);
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6"
      >
        
        <div className="w-1/2 flex flex-col items-center justify-center space-y-4">
          <div className="w-auto">
            <img
              src="/userReward.jpeg"
              alt="website logo"
              className="w-[100px] h-[6100px] object-cover rounded-full"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
        </div>

        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <button
  type="submit"
  className="w-full bg-blue-500 text-yellow-300 py-2 rounded-md hover:bg-blue-600 transition duration-200"
>
  Login
</button>

      <p className="text-center text-gray-600">
        Don't have an account?{""}
      </p>
      <div className="text-Red-100">
  <a href="/signUp">Sign Up</a>
</div>

      <a href="/signUp" className="text-red-500 flex items-center justify-center hover:bg-yellow-100 transition duration-200">
      signUp</a>
      </form>
    </div>
  );
}
