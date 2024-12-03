import React from "react";

const UserDashboard = () => {
  return (
    <div className="container mx-auto p-6 flex justify-center items-center  bg-gray-100 rounded-lg ">
      <div>
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">Welcome to Your Dashboard!</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        This page is accessible by all <span className="font-semibold text-green-500">users</span>.
      </p>
      <div className="mt-8 w-1/2 ml-32">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Your Skills</h3>
        <div className="space-y-4 ">
          <div>
            <p className="text-gray-600 mb-1">React.js</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-400 h-4 rounded-full"
                style={{
                  width: "90%",
                  animation: "growBarA 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Node.js</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-green-400 h-4 rounded-full"
                style={{
                  width: "75%",
                  animation: "growBarB 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-1">JavaScript</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-yellow-400 h-4 rounded-full"
                style={{
                  width: "85%",
                  animation: "growBarC 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-1">CSS</p>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-purple-400 h-4 rounded-full"
                style={{
                  width: "65%",
                  animation: "growBarD 1.5s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 shadow">
          Update Profile
        </button>
        <button className="px-6 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300 shadow">
          View Notifications
        </button>
        <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 shadow">
          Explore Content
        </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
