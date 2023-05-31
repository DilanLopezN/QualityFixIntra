import { NavLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import {
  House, FileText, Pencil,
  CalendarCheck
} from 'phosphor-react'
import { MdOutlineLibraryAdd, } from 'react-icons/md'
import { BiImageAdd } from 'react-icons/bi'
import { LuUserCog } from 'react-icons/lu'

import '../styles/sidebar.css'
import Logo from '../assets/logo.png'

export function AdminSideBar() {
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
        <NavLink to="/Home">
          <House weight="fill" />
          <span> Home</span>
        </NavLink>
        <NavLink to="/Admin"
         style={({ isActive }) => {
          return {
            color: isActive ? "#f5c420" : "black",
          };
        }}>
          <MdOutlineLibraryAdd />
          <span>Adicionar Nova Noticia</span>
        </NavLink>
        <a href="">
          <BiImageAdd />
          <span>Novo Comunicado</span>
        </a>
        <a href="">
          <CalendarCheck />
          <span>Alterar Caledário</span>
        </a>
        <a href="">
          <FileText />
          <span>Adicionar Documentos</span>
        </a>
        <a href="">
          <LuUserCog />
          <span>Controle de Usuários</span>
        </a>
      </nav>
      <button className="newTweet" type="button">
        <Pencil />
        <span> Tweet</span>
      </button>
    </aside>
  )
}
