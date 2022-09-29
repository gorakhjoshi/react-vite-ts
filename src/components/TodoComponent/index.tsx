import { Box, Flex, Heading, Icon, IconButton, Spacer } from '@chakra-ui/react';
import { BsFillSunFill } from 'react-icons/bs';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

function TodoComponent() {
  return (
    <Flex
      w="100%"
      h="35vh"
      bgImage="assets/bgImage.jpg"
      bgSize="cover"
      bgPosition="center"
      direction="column"
      align="center"
    >
      <Flex w="24%" justifyContent="space-between" mt="80px" mb="20px">
        <Heading as="h1" fontSize="50px">
          TODO
        </Heading>
        <IconButton
          aria-label="toggle mode"
          colorScheme="transparent"
          icon={<Icon as={BsFillSunFill} />}
          fontSize="30px"
          color="white"
        />
      </Flex>
      <Box>
        <TodoInput />
        <TodoList />
        {/* TODO: Create FilterTodo Component */}
      </Box>
    </Flex>
  );
}

export default TodoComponent;
