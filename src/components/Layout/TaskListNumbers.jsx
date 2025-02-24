import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
    {/* New Task Card */}
    <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl mt-2 font-medium text-white">New Task</h3>
    </div>
    
    {/* Completed Task Card */}
    <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-green-500 to-green-400 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white">{data.taskCounts.completed}</h2>
        <h3 className="text-xl mt-2 font-medium text-white">Completed Task</h3>
    </div>
    
    {/* Accepted Task Card */}
    <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-4xl text-black font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-xl mt-2 text-black font-medium">Accepted Task</h3>
    </div>
    
    {/* Failed Task Card */}
    <div className="rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-red-500 to-red-400 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white">{data.taskCounts.failed}</h2>
        <h3 className="text-xl mt-2 font-medium text-white">Failed Task</h3>
    </div>
</div>

  )
}

export default TaskListNumbers