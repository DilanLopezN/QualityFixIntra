import '../styles/layout.css'
import { Outlet } from 'react-router-dom'
import { AdminSideBar } from '../components/AdminSidebar'

export function AdminLayout() {
  return (
    <div className="layout">
      <AdminSideBar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}