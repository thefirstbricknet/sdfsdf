// src/Pages/AdminDashboard.jsx
import React from "react";
import Header from "../Other/HeaderAdmin";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex-1 w-full">
        {/* Header */}
        <Header changeUser={props.changeUser} />

        {/* Dashboard content */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Left Section: Create Task */}
          <div className="col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-emerald-500/20 transition-all duration-300">
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                Create Task
              </h2>
              <CreateTask />
            </div>
          </div>

          {/* Right Section: All Tasks */}
          <div className="col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-emerald-500/20 transition-all duration-300">
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                All Employee Tasks
              </h2>
              <AllTask />
            </div>
          </div>
        </div>

        {/* 🚀 Coming Soon Section */}
        <section className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-2xl shadow-lg px-6 py-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              🚀 Complete Project Coming Soon!
            </h2>
            <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
              I’m working hard to bring you the full version of this platform.  
              Stay tuned for more features and updates. ✨
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
