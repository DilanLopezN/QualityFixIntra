import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/Signin";

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
      },
    ]
  }
])