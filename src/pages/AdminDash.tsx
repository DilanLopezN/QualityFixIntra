import { Button, Flex, FormControl, Text } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { ImagePicker } from "../components/ImagePicker"

export function AdminDash() {
  return (
    <>
    <Header title="Painel Administrativo"/>
    <Flex m="4" direction="column" height={800} >
      <Text mb="2" fontWeight="bold">Acrescentar nova noticia</Text>
      <FormControl>
        <Input name="title" label="Titulo da noticia" />
        <Input name="title" label="Descrição da noticia" />

       <ImagePicker/>
       <Button mt="4" colorScheme="linkedin">Enviar</Button>
      </FormControl>

      <Flex mt="8" gap="4">
        <Button colorScheme="facebook">Editar noticia</Button>
        <Button colorScheme="red">Deletar noticia</Button>
      </Flex>
    </Flex>
    </>
    
  )
}