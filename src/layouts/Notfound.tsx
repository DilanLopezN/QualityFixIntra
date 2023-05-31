import '../styles/layout.css'
import { Outlet } from 'react-router-dom'
import { NotFoundSidebar } from '../components/NotFoundSidebar'

export function NotFoundLayout() {
  return (
    <div className="layout">
      <NotFoundSidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}