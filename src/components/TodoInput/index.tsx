import {
  Input,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoIosRadioButtonOff } from 'react-icons/io';
import useHandleTodo from '../../hooks/useHandleTodo';

function TodoInput() {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('white', 'hsl(235, 24%, 19%)');
  const color = useColorModeValue('hsl(235, 19%, 35%)', 'hsl(234, 39%, 85%)');

  const { handleCreateNewTask, setNewTaskTitle, newTaskTitle } =
    useHandleTodo();

  return (
    <Flex w="100%" mb="6" boxShadow="2xl">
      <InputGroup>
        <InputLeftElement
          py="8"
          px="38px"
          color={
            colorMode === 'light' ? 'hsl(236, 9%, 61%)' : 'hsl(233, 14%, 35%)'
          }
        >
          <Icon as={IoIosRadioButtonOff} fontSize="26" />
        </InputLeftElement>

        <Input
          color={color}
          variant="filled"
          bgColor={bg}
          placeholder="Create a new todo..."
          py="8"
          pl="16"
          background="hsl(235, 24%, 19%)"
          maxLength={40}
          _hover={{
            background: '',
          }}
          _focus={{
            background: '',
          }}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
          onKeyUp={handleCreateNewTask}
        />
      </InputGroup>
    </Flex>
  );
}

export default TodoInput;
