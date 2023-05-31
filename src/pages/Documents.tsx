import { Button, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export function Documents() {
  return (
    <>
    <Header title="Documentos"/>
    <Flex m="4" direction="column" overflow="auto" gap={4}>
      <Button colorScheme="linkedin">Baixar PDF produtos</Button>
      <Button colorScheme="linkedin">Baixar Relatórios Comercial</Button>
      <Button colorScheme="linkedin">Baixar Manual Segurança do Trabalho</Button>
    </Flex>
    </>
  )
}