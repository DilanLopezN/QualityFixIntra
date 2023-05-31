import { Flex, Table, Tr, Td, Tbody, Thead } from "@chakra-ui/react"
import { Header } from "../components/Header"

export function Calendar() {
  return (
    <>
    <Header title="Calendário"/>
      <Flex m="4" height={800} >
      <Table>
    <Thead>
      <Tr>
        <th>Data</th>
        <th>Feriado Nacional</th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1 de janeiro</Td>
        <Td>Ano Novo</Td>P
      </Tr>
      <Tr>
        <Td>21 de abril</Td>
        <Td>Tiradentes</Td>
      </Tr>
      <Tr>
        <Td>1 de maio</Td>
        <Td>Dia do Trabalho</Td>
      </Tr>
      <Tr>
        <Td>7 de setembro</Td>
        <Td>Independência do Brasil</Td>
      </Tr>
      <Tr>
        <Td>12 de outubro</Td>
        <Td>Nossa Senhora Aparecida</Td>
      </Tr>
      <Tr>
        <Td>2 de novembro</Td>
        <Td>Finados</Td>
      </Tr>
      <Tr>
        <Td>15 de novembro</Td>
        <Td>Proclamação da República</Td>
      </Tr>
      <Tr>
        <Td>25 de dezembro</Td>
        <Td>Natal</Td>
      </Tr>
    </Tbody>
  </Table>
      </Flex>
    </>
   
  )
}