import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import { IoIosRadioButtonOff } from 'react-icons/io';

function TodoInput() {
  const { colorMode } = useColorMode();

  return (
    <Flex w="100%" mb="6" boxShadow="2xl">
      <InputGroup>
        <InputLeftElement py="8" px="38px" color={colorMode ? 'red' : 'green'}>
          <Icon as={IoIosRadioButtonOff} fontSize="26" color="white" />
        </InputLeftElement>

        <Input
          variant="filled"
          color="white"
          fontSize="20px"
          placeholder="Create a new todo..."
          py="8"
          pl="16"
          background= 'hsl(235, 24%, 19%)'
          maxLength={40}
          _hover={{
            background: '',
          }}
          _focus={{
            background: '',
          }}
        />
      </InputGroup>
    </Flex>
  );
}

export default TodoInput;
