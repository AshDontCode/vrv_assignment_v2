import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "", role:"" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json(); // Parse response JSON
  
      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }
  
      toast.success("Successfully Registered");
      setTimeout(() => {
        window.location = "/login";
      }, 1000);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="container mx-auto mt-10 flex flex-col gap-10 justify-center items-center border shadow-md rounded-md w-1/2 h-[500px] p-5">
      <h1 className="text-2xl font-bold mt-10 text-ellipsis">Register</h1>
      <input
        className="border-b-2 focus:outline-none w-1/2"
        type="text"
        placeholder="First Name"
        value={formData.firstname}
        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
      />
      <input
        className="border-b-2 focus:outline-none w-1/2"
        type="text"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
      />
      <input
        className="border-b-2 focus:outline-none w-1/2"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        className="border-b-2 focus:outline-none w-1/2"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
        <select
        className="border-b-2 focus:outline-none w-1/2"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Moderator">Moderator</option>
      </select>
      <button type="submit" className="border rounded-md px-4 py-2 w-1/2 hover:bg-blue-600 text-white bg-blue-500">Register</button>
      <p className="-m-10 mb-10 text-sm">Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
    </form>
  );
};

export default Register;
