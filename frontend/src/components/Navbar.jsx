import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, getUserRole } from "../utils/auth";




// toast.configure();

const Navbar = () => {
  const isLoggedIn = isAuthenticated();
  const role = getUserRole();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    navigate('/login');
  }

  return (
    <nav className=" p-4 flex flex-row justify-between container mx-auto">
      <div className="flex flex-row justify-between items-center gap-3">
        <Link to="/" className="font-san p-2 rounded-md  text-gray-500 hover:text-gray-900">Home</Link>
        <Link to="#" className="font-san p-2 rounded-md  text-gray-500 hover:text-gray-900">About</Link>
        <Link to="#" className="font-san p-2 rounded-md  text-gray-500 hover:text-gray-900">Service</Link>
        <Link to="#" className="font-san p-2 rounded-md  text-gray-500 hover:text-gray-900">Pricing</Link>
        <Link to="#" className="font-san p-2 rounded-md  text-gray-500 hover:text-gray-900">Contact</Link>
      </div>

      {isLoggedIn ? (
        <>
        <div className="flex flex-row gap-2">
          <Link className="font-sans border p-2 rounded-md text-gray-500 hover:text-gray-900" to="/profile">Profile</Link>
          {role === "Admin" && <Link className="font-sans border p-2 text-gray-500 hover:text-gray-900" to="/admin">Admin Dashboard</Link>}
          <Link className="font-sans border p-2 rounded-md text-gray-500 hover:text-gray-900" to="/dashboard">Dashboard</Link>
          <button className="font-sans border p-2 rounded-md bg-blue-600 text-white" onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <div className="flex gap-3">
        <>
          <Link className="font-sans border p-2 rounded-md bg-blue-500 text-white" to="/login">Login</Link>
          <Link to="/register" className="font-sans border p-2 rounded-md bg-blue-500 text-white">Register</Link>
        </>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
