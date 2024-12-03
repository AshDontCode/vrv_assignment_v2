import React from "react";

const Profile = () => {
  return (
    <div className="container flex justify-center items-center mx-auto p-6 bg-gray-100 rounded-lg h-[500px]">
      <div>
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">
        Your Profile
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        This page is accessible to all user roles:{" "}
        <span className="font-semibold text-blue-500">Admin</span>,{" "}
        <span className="font-semibold text-green-500">User</span>, and{" "}
        <span className="font-semibold text-purple-500">Moderator</span>.
      </p>
      </div>
    </div>
  );
};

export default Profile;
