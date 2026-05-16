import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      
      {/* 🔹 Header */}
      <header className="p-4 sm:p-6 shadow-lg border-b border-gray-700">
        <Header changeUser={props.changeUser} data={props.data} />
      </header>

      {/* 🔹 Main Content */}
     
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full flex flex-col gap-8">
        
        {/* Stats Section */}
        <section className="mb-4 sm:mb-8">
            
          <TaskListNumbers data={props.data} />
          
        </section>

        {/* Task List Section */}
        <section className="bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 mb-6 overflow-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Your Tasks
          </h2>
          <TaskList data={props.data} />
        </section>

        {/* 🚀 Coming Soon Section */}
        <section className="text-center mt-6 sm:mt-10 px-2 sm:px-0">
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-2xl shadow-lg px-4 sm:px-6 py-6 sm:py-10 max-w-full sm:max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              🚀 Complete Project Coming Soon!
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm md:text-base">
              I'm working hard to bring you the full version of this platform.
              Stay tuned for more features and updates. ✨
            </p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default EmployeeDashboard;
