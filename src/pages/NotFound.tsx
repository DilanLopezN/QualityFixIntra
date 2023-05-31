import { Flex, Image, Text } from '@chakra-ui/react'
import notfound from '../assets/notfound.png'
import { Header } from '../components/Header'
export function NotFound() {
    return (
        <>
        <Header title='em construção'/>
        <Flex m="4" align="center" justify="center" direction="column">
        <Image src={notfound} w="80%" h="80%" />
        <Text mt="8" fontWeight="bold" >OPS... PARECE QUE VOCÊ TENTOU ACESSAR UMA PÁGINA AINDA EM CONSTRUÇÃO</Text>
        </Flex>
   
        </>
       
    )
}