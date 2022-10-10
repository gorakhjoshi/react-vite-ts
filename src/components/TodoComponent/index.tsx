import { Flex, Box, Heading, IconButton, Icon } from '@chakra-ui/react';
import { BsMoonFill } from 'react-icons/bs';
import FilterTodo from '../FilterTodo';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

export default function TodoComponent() {
  return (
    <>
      <Flex
        h="300px"
        w="100%"
        bgImage="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        position="absolute"
        bgSize="cover"
        bgPosition="center"
      />

      <Flex
        direction="column"
        maxW="585px"
        mx="auto"
        position="relative"
        top="50"
        p="6"
      >
        <Flex justify="space-between" marginBottom="8" as="header">
          <Heading fontSize="42px" as="h1">
            T O D O
          </Heading>
          <IconButton
            aria-label="toggle mode"
            colorScheme="transparent"
            icon={
              <Icon as={BsMoonFill} color="hsl(236, 33%, 92%)" fontSize="24" />
            }
          />
        </Flex>

        <Box as="main">
          <TodoInput />
          <TodoList />
          <FilterTodo />
        </Box>
      </Flex>
    </>
  );
}
