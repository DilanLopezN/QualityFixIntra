import '../styles/layout.css'
import { Outlet } from 'react-router-dom'
import { SystemSidebar } from '../components/SystemSidebar'

export function SystemLayout() {
  return (
    <div className="layout">
      <SystemSidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}