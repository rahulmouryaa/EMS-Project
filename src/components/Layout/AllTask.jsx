import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

  
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg mt-5 shadow-xl">
  <h1 className="text-2xl font-semibold text-white mb-6">Task Overview</h1>

  <div className="bg-red-500 text-white mb-4 py-3 px-5 flex justify-between items-center rounded-lg shadow-md">
    <h2 className="text-lg font-semibold w-1/5">Employee Name</h2>
    <h3 className="text-lg font-semibold w-1/5">New Task</h3>
    <h5 className="text-lg font-semibold w-1/5">Active Task</h5>
    <h5 className="text-lg font-semibold w-1/5">Completed</h5>
    <h5 className="text-lg font-semibold w-1/5">Failed</h5>
  </div>

  <div>
    {userData.map((elem, idx) => (
      <div
        key={idx}
        className="border-2 border-emerald-500 mb-3 py-3 px-5 flex justify-between items-center rounded-lg bg-[#232323] text-white shadow-lg hover:bg-[#333333] transition duration-300"
      >
        <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
        <h3 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskCounts.newTask}</h3>
        <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
        <h5 className="text-lg font-medium w-1/5 text-green-400">{elem.taskCounts.completed}</h5>
        <h5 className="text-lg font-medium w-1/5 text-red-500">{elem.taskCounts.failed}</h5>
      </div>
    ))}
  </div>
</div>

  )
}

export default AllTask