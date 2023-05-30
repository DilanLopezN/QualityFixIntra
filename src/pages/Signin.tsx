import { Flex, Button, Image, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const schema = yup
  .object({
    email: yup.string().required('E-mail obrigatório').email(),
    password: yup.string().required('Senha obrigatória')
  })
  .required()

  interface SignInProps {
    email: string;
    password: string;
  }
export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()

  const  handleSignIn: SubmitHandler<SignInProps> = async (values) => {
    const data = {
      email: values.email,
      password: values.password
    }
    console.log(data)
    navigate("/Home")
    }
  return (
    <Flex
      bgColor="yellow.200"
      justify="center"
      alignItems="center"
      width="full"
      height="100vh"
    >
      <Flex
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        bgColor="white"
        width={480}
        height={620}
        border="2px"
        rounded="4px"
        align="center"
        justify="center"
        direction="column"
      >
        <Image mb="8" src={logo} w={188} h={118} />
        <Flex direction="column" m="2" p="4">
          <FormControl 
          as="form" onSubmit={handleSubmit(handleSignIn as  SubmitHandler<FieldValues>)}>

       
          <Input
            m="2"
            placeholder="Digite seu e-mail"
            w={320}
            {...register('email')}
            name="email"
            error={errors.email}
            label="Seu e-mail:"
          />

          <Input
            m="2"
            placeholder="Digite sua senha"
            w={320}
            {...register('password')}
            name="password"
            error={errors.password}
            label="Sua senha:"
          />

          <Button 
          fontWeight="bold"
         color="gray.800"
          w="100%"
          type="submit" mt="6" colorScheme="yellow">
            ENTRAR
          </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  )
}
