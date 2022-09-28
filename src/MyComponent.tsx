import { Box } from '@chakra-ui/react';
import useHandleTodo from './hooks/useHandleTodo';

function MyComponent() {
  const { task } = useHandleTodo();
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      {task.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </Box>
  );
}

export default MyComponent;
