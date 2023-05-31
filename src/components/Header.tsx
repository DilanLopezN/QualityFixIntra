import '../styles/header.css'
import { useNavigate } from 'react-router-dom'
import { Button, Flex } from '@chakra-ui/react'
import { RiSearchLine} from 'react-icons/ri'
import { Input } from './Input'
interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <div className="timeLineHeader">
      {title}

      <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      height={42}
      maxWidth={480}
      alignSelf='center'
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.200"
      borderRadius="full"
      >
        <Input 
        color="gray.700"
        name="search"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar no sistema"
        _placeholder={{color: 'gray.700'}}

        
        />


      
          <RiSearchLine size={28} color="black"/>
        

      </Flex>

      <Button onClick={() => navigate("/")} colorScheme='linkedin'>Sair</Button>
    </div>
  )
}