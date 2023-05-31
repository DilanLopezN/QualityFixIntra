import { NavLink } from 'react-router-dom'
import { Image, Text } from '@chakra-ui/react'
import {
    House, Monitor
} from 'phosphor-react'
import { MdAdminPanelSettings } from 'react-icons/md'
import '../styles/sidebar.css'
import Logo from '../assets/logo.png'

export function NotFoundSidebar() {
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
        <Text mt="2" fontWeight="bold" color="yellow.700">VOLTE A NAVEGAR NOS LINKS ABAIXO</Text>

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
        <NavLink  to="/Admin"
        style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <MdAdminPanelSettings weight="fill" />
          <span> Administração</span>
        </NavLink>

        <NavLink to="/Sistem"
            style={({ isActive }) => {
              return {
                color: isActive ? "#f5c420" : "black",
              };
            }}
        >
          <Monitor />
          <span>Sistema</span>
        </NavLink>
    
      </nav>
    
    </aside>
  )
}
