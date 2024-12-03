import React from "react";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6  bg-gray-100 rounded-lg flex justify-center items-center h-[500px]">
      <div>
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">Welcome Admin!</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        This page can only be accessed by <span className="font-semibold text-red-500">Admin</span> users.
      </p>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Dashboard Overview</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Manage users and their roles</li>
          <li>Access system analytics and reports</li>
          <li>Configure application settings</li>
        </ul>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 shadow">
          Go to Settings
        </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
