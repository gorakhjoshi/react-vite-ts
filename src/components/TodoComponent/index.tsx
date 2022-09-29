import { Box, Flex, Heading, Icon, IconButton } from '@chakra-ui/react';
import { BsFillAlarmFill } from 'react-icons/bs';
import TodoInput from '../TodoInput';

function TodoComponent() {
  return (
    <Flex
      as="main"
      w="100%"
      h="400px"
      bgImage="assets/bgImage.jpg"
      position="absolute"
      bgSize="cover"
      bgPosition="center"
    >
      <Flex
        direction="column"
        maxW="600px"
        position="relative"
        mx="auto"
        top="50"
        p="5"
      >
        <Flex justify="space-between">
          <Heading as="h1" fontSize="50px">
            TODO
          </Heading>
          <IconButton
            aria-label="toggle mode"
            colorScheme="transparent"
            icon={<Icon as={BsFillAlarmFill} />}
            size="lg"
          />
        </Flex>
      </Flex>
      <Box>
        <TodoInput />
        {/* TODO: Create TodoList Component */}
        {/* TODO: Create FilterTodo Component */}
      </Box>
    </Flex>
  );
}

export default TodoComponent;
