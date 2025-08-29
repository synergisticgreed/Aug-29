import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      setMessage(`✅ ${res.data.message}`);
    } catch (err) {
      if (err.response) {
        setMessage(`❌ ${err.response.data.message || "Login failed"}`);
      } else {
        setMessage("❌ Cannot connect to backend");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

        {message && (
          <p className="text-center text-red-600 font-medium mt-2">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
