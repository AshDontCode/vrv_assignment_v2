import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/dashboard" element={<ProtectedRoute component={UserDashboard} />} />
        <Route
          path="/admin"
          element={<ProtectedRoute component={AdminDashboard} role="Admin" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
