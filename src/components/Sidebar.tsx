import { NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  Pencil,
  CalendarCheck,
  Monitor
} from 'phosphor-react'
import '../styles/sidebar.css'
import Logo from '../assets/logo.png'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Image mt="4" mb="8" width={168} height={98} className="logo" src={Logo} alt="Logo" />
      <nav className="mainNavigation">
        <NavLink to="/Home">
          <House weight="fill" />
          <span> Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Comunicados</span>
        </a>
        <a href="">
          <Bell />
          <span> Notificações</span>
        </a>
        <a href="">
          <CalendarCheck/>
          <span>Caledário</span>
        </a>
        <a href="">
          <FileText />
          <span>Documentos</span>
        </a>
        <a href="">
          <Monitor />
          <span>Sistema</span>
        </a>
      </nav>
      <button className="newTweet" type="button">
        <Pencil />
        <span> Tweet</span>
      </button>
    </aside>
  )
}