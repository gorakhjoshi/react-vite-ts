import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { IoIosRadioButtonOff } from 'react-icons/io';

function TodoInput() {
  return (
    <Flex w="100%" mb="6" boxShadow="2xl">
      <InputGroup>
        <InputLeftElement py="8" px="38px">
          <Icon as={IoIosRadioButtonOff} fontSize="26" />
        </InputLeftElement>

        <Input
          variant="filled"
          placeholder="Create a new todo..."
          py="8"
          pl="16"
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
