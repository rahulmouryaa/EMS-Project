import React from 'react'

  const AcceptTask = ({ data }) => {
    return (
      <div className="flex-shrink-0 h-full w-[320px] p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-600 text-white text-sm px-4 py-1 rounded-lg font-medium">{data.category}</h3>
          <h4 className="text-sm text-gray-400">{data.taskDate}</h4>
        </div>
  
        <h2 className="mt-4 text-2xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
  
        <div className="flex justify-between mt-6 space-x-4">
          <button className="bg-green-600 text-white rounded-lg font-medium py-2 px-6 text-sm shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300">
            Complete Task
          </button>
          <button className="bg-red-600 text-white rounded-lg font-medium py-2 px-6 text-sm shadow-md hover:bg-red-700 hover:shadow-lg transition duration-300">
            Mark as Failed
          </button>
        </div>
      </div>
    );
  };
  
  export default AcceptTask;
