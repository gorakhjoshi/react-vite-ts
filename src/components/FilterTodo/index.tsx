import {
  Flex,
  Text,
  useColorModeValue,
  useColorMode,
  useBreakpointValue,
} from '@chakra-ui/react';
import useHandleTodo from '../../hooks/useHandleTodo';

function FilterTodo() {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('white', 'hsl(235, 24%, 19%)');

  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
  });

  const { task, filter } = useHandleTodo();

  const activeTasks = task?.filter((tasks) => tasks.isComplete === false);

  return (
    <>
      <Flex
        borderBottomRadius="md"
        bgColor={bg}
        px="30px"
        py="4"
        align="center"
        justify="space-between"
      >
        <Text color="hsl(233, 14%, 35%)">{`${activeTasks?.length} items left`}</Text>

        {!isMobile && (
          <Flex direction="row" justify="space-around" maxW="190px" w="100%">
            <Text
              fontSize="15px"
              fontWeight="bold"
              color={
                filter === 'All' ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'
              }
              _hover={
                filter === 'All'
                  ? { cursor: 'pointer' }
                  : colorMode === 'dark'
                  ? { cursor: 'pointer', color: 'hsl(234, 39%, 85%)' }
                  : { cursor: 'pointer', color: 'hsl(233, 14%, 35%)' }
              }
            >
              All
            </Text>

            <Text
              fontSize="15px"
              fontWeight="bold"
              color={
                filter === 'Active' ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'
              }
              _hover={
                filter === 'Active'
                  ? { cursor: 'pointer' }
                  : colorMode === 'dark'
                  ? { cursor: 'pointer', color: 'hsl(234, 39%, 85%)' }
                  : { cursor: 'pointer', color: 'hsl(233, 14%, 35%)' }
              }
            >
              Active
            </Text>

            <Text
              fontSize="15px"
              fontWeight="bold"
              color={
                filter === 'Completed'
                  ? 'hsl(220, 98%, 61%)'
                  : 'hsl(236, 9%, 61%)'
              }
              _hover={
                filter === 'Completed'
                  ? { cursor: 'pointer' }
                  : colorMode === 'dark'
                  ? { cursor: 'pointer', color: 'hsl(234, 39%, 85%)' }
                  : { cursor: 'pointer', color: 'hsl(233, 14%, 35%)' }
              }
            >
              Completed
            </Text>
          </Flex>
        )}

        <Text
          fontSize="15px"
          color="hsl(236, 9%, 61%)"
          _hover={
            colorMode === 'dark'
              ? { cursor: 'pointer', color: 'hsl(234, 39%, 85%)' }
              : { cursor: 'pointer', color: 'hsl(233, 14%, 35%)' }
          }
        >
          Clear Completed
        </Text>
      </Flex>

      {isMobile && (
        <Flex
          borderRadius="md"
          bgColor={bg}
          px="16"
          py="4"
          align="center"
          justify="space-between"
          mt="6"
          boxShadow="2xl"
        >
          <Text
            fontSize="18px"
            fontWeight="bold"
            color={
              filter === 'All' ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'
            }
            _hover={
              filter === 'All'
                ? { cursor: 'pointer' }
                : colorMode === 'dark'
                ? { cursor: 'pointer', color: 'hsl(234, 39%, 85%)' }
                : { cursor: 'pointer', color: 'hsl(233, 14%, 35%)' }
            }
          >
            All
          </Text>

          <Text
            fontSize="18px"
            fontWeight="bold"
            color={
              filter === 'Active' ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'
            }
            _hover={
              filter === 'Active'
                ? { cursor: 'pointer' }
                : colorMode === 'dark'
                ? { cursor: 'pointer', color: 'hsl(234, 39%, 85%)' }
                : { cursor: 'pointer', color: 'hsl(233, 14%, 35%)' }
            }
          >
            Active
          </Text>

          <Text
            fontSize="18px"
            fontWeight="bold"
            color={
              filter === 'Completed'
                ? 'hsl(220, 98%, 61%)'
                : 'hsl(236, 9%, 61%)'
            }
            _hover={
              filter === 'Completed'
                ? { cursor: 'pointer' }
                : colorMode === 'dark'
                ? { cursor: 'pointer', color: 'hsl(234, 39%, 85%)' }
                : { cursor: 'pointer', color: 'hsl(233, 14%, 35%)' }
            }
          >
            Completed
          </Text>
        </Flex>
      )}
    </>
  );
}

export default FilterTodo;
