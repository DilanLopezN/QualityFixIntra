import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'
import './styles/global.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
     <RouterProvider router={router} />
  </ChakraProvider>
  
)
