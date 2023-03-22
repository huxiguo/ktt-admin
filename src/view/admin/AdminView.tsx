import { Outlet } from 'react-router-dom'
import React from 'react'
const AdminView: React.FC = () => {
  return (
    <div>
      <h1>Admin!!!</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminView
