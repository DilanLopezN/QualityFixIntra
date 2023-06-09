import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | any
} 

const InputBase: ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error} >
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput 
        name={name}
        id={name}
        minWidth={320}
        height={10}
        borderColor="gray.600"
        focusBorderColor="yellow.200"
        ref={ref}
        {...rest}
        /> 
       { !!error && (
         <FormErrorMessage>
          {error.message}
         </FormErrorMessage>
       )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)