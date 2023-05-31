import { NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import {
  House,
  Hash,
  FileText,
  CalendarCheck,
  Monitor
} from 'phosphor-react'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import '../styles/sidebar.css'
import Logo from '../assets/logo.png'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Image
        mt="4"
        mb="8"
        width={168}
        height={98}
        className="logo"
        src={Logo}
        alt="Logo"
      />
      <nav className="mainNavigation">
        <NavLink  to="/Home"
        style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <House weight="fill" />
          <span> Home</span>
        </NavLink>
        <NavLink to="/Announcements"
        style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <Hash />
          <span>Comunicados</span>
        </NavLink>

        <NavLink to="/Calendar"
            style={({ isActive }) => {
              return {
                color: isActive ? "#f5c420" : "black",
              };
            }}
        >
          <CalendarCheck />
          <span>Calendário</span>
        </NavLink>
        <NavLink to="/Documents"
         style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <FileText />
          <span>Documentos</span>
        </NavLink>
        <NavLink to="/Admin"
        style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <MdOutlineAdminPanelSettings />
          <span>Administrativo</span>
        </NavLink>
        <NavLink to="/Sistem">
          <Monitor />
          <span>Sistema</span>
        </NavLink>
      </nav>
    
    </aside>
  )
}
