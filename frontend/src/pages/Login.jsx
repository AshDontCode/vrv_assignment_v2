import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to log in");
      }

      if (data.token) {
        toast.success("Logged In");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({ role: data.role }));

        setTimeout(() => {
          window.location = "/";
        }, 1000);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong. Please try again.");
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="container mx-auto flex flex-col gap-10 justify-center mt-10  items-center border rounded-md shadow-md w-1/3 h-[570px] p-5"
    >
      <h1 className="text-2xl font-bold text-ellipsis text-pretty ">Login</h1>
      <input
        className="border-b-2 focus:outline-none w-1/2 "
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        className="border-b-2 focus:outline-none w-1/2 "
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button
        type="submit"
        className="border rounded-md px-4 py-2 hover:bg-blue-600 text-white bg-blue-500 w-1/2"
      >
        Login
      </button>
      <p className="-m-10 mb-10 text-sm">Do not have an account? <Link to='/register' className="text-blue-500">Register</Link></p>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border  w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Demo User</td>
              <td className="border border-gray-300 px-4 py-2">
                ashishuser@gmail.com
              </td>
              <td className="border border-gray-300 px-4 py-2">1234</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Demo Admin</td>
              <td className="border border-gray-300 px-4 py-2">
                ashishadmin@gmail.com
              </td>
              <td className="border border-gray-300 px-4 py-2">12345</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default Login;
