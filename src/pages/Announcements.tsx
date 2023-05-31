import { Flex, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";
import ExComunicado from '../assets/excomunicado.png'
import ExComunicado2 from '../assets/excomunicadodois.png'
export function Announcements(){
  return (
    <>
      <Header title="Comunicados" />
      <Flex m="4" direction="column" overflow="auto" height={800} >
        <Image src={ExComunicado} />
        <Image src={ExComunicado2} />
      </Flex>
    </>
    
  )
}