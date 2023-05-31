import { Flex, Image, Text } from "@chakra-ui/react";
import Example from '../assets/expost1.jpg'
export function LastNews() {
  return (
    <div>
    

     <Flex m="4" direction="column" border="1px"
    

      borderColor="gray.200"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
     rounded="4" p="2">
      <Flex>
        <Text pr="2">Autor: <span>Ricardo - RH</span></Text>
      </Flex>
      
      <Image src={Example} height={168}/>
      <Text  fontWeight="medium" fontSize={18}>
      Conheça a nova linha de Pega Chapas Quality Fix
      </Text>
      <p>A Quality Fix do Brasil apresenta sua nova linha exclusiva de Pega Chapas. Trata-se de equipamentos indispensáveis e que trazem</p>
     </Flex>
      </div>
  )
}