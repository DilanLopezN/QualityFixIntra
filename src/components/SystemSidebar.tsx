import { NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import {
  House
} from 'phosphor-react'
import { BiMoney } from 'react-icons/bi'
import { TbReportSearch } from 'react-icons/tb'
import { GrResources, GrConfigure } from 'react-icons/gr'
import '../styles/sidebar.css'
import Logo from '../assets/logo.png'

export function SystemSidebar() {
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
        <NavLink  to="/Sistem"
        style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <House weight="fill" />
          <span> Dashboard</span>
        </NavLink>
        <NavLink to="/Finance"
        style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <BiMoney />
          <span>Financeiro</span>
        </NavLink>

        <NavLink to="/Reports"
            style={({ isActive }) => {
              return {
                color: isActive ? "#f5c420" : "black",
              };
            }}
        >
          <TbReportSearch />
          <span>Relatórios</span>
        </NavLink>
        <NavLink to="/HumanResources"
         style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <GrResources />
          <span>Recursos Humanos</span>
        </NavLink>
        <NavLink to="/Configs"
        style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}
        >
          <GrConfigure />
          <span>Configurações</span>
        </NavLink>
   
      </nav>
    
    </aside>
  )
}
