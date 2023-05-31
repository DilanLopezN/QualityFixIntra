
import { Flex, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { LastNews } from '../components/LastNews'

export function Home() {
  return (
    <>
    <Header title="Home" />
    <Flex direction="column" height={800}  overflow="auto">
    <Text m="4" fontWeight="bold" fontSize={24}>
      últimas noticias
     </Text>
      
      <LastNews/>
      <LastNews/>
      <LastNews/>
      <LastNews/>
    </Flex>
    </>
    
  )
}
