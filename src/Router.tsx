import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/Signin";
import { Announcements } from "./pages/Announcements";
import { AdminLayout } from "./layouts/Admin";
import { AdminDash } from "./pages/AdminDash";
import { Calendar } from "./pages/Calendar";
import { Documents } from "./pages/Documents";
import { SystemLayout } from "./layouts/Sistem";
import { NewSystem } from "./pages/NewSystem";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/Home',
    element: <Default />,
    children: [
      {
        path: '/Home',
        element: <Home />
      }
    ]
  },
  {
    path: '/Admin',
    element: <AdminLayout/>,
    children: [
      {
        path: '/Admin',
        element: <AdminDash />
      }
    ]
  },
  {
    path: '/Announcements',
    element: <Default />,
    children: [
      {
        path: '/Announcements',
        element: <Announcements/>
      }
    ]
  },
  {
    path: '/Calendar',
    element: <Default />,
    children: [
      {
        path: '/Calendar',
        element: <Calendar/>
      }
    ]
  },
  {
    path: '/Documents',
    element: <Default />,
    children: [
      {
        path: '/Documents',
        element: <Documents/>
      }
    ]
  },
  {
    path: '/Sistem',
    element: <SystemLayout/>,
    children: [
      {
        path: "/Sistem",
        element: <NewSystem />
      }
    ]
  }
])