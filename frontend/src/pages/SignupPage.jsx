import React, { useState } from "react";
import axios from "axios";

const  SignupPage=()=>{
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // axios automatically stringifies JSON & sets headers
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);

      setMessage(res.data.message); // directly access res.data
    } catch (err) {
      if (err.response) {
        // Backend responded with error status
        setMessage(`❌ ${err.response.data.message || "Signup failed"}`);
      } else {
        // Network error or server down
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
        <h2 className="text-2xl font-bold text-center text-gray-700">Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

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
          Sign Up
        </button>

        {message && (
          <p className="text-center text-green-600 font-medium mt-2">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default SignupPage;
