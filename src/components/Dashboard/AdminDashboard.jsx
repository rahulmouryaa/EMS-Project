import React from 'react'
import Header from '../Layout/Header'
import CreateTask from '../Layout/CreateTask'
import AllTask from '../Layout/AllTask'

const AdminDashboard = (props) => {

  return (
    <div className='w-full p-7 h-screen'>
      <Header changeUser={props.changeUser} data={null} />
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
