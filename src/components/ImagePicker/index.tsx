import { Flex, Text } from "@chakra-ui/react";
import {FcAddImage} from 'react-icons/fc'
import "./picker.css"
export function ImagePicker() {
  return (
    <Flex direction="column" gap={2}>
    <label className="labelPick" htmlFor="anexo">
      <Flex direction="row" align="center" gap="2">
      <FcAddImage size={28} />
      <Text textDecoration="underline" > Anexar Imagem</Text>
      </Flex>
    
    </label>
    <input className="inputPick" type="file" id="anexo" name="anexo"></input>
    </Flex>
  )
}