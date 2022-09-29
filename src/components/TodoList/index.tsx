import {
  Flex,
  IconButton,
  Icon,
  Text,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

import { IoIosRadioButtonOff, IoIosCheckmark } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import useHandleTodo from '../../hooks/useHandleTodo';

function TodoList() {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue('white', 'hsl(235, 24%, 19%)');
  const border = useColorModeValue('hsl(233, 11%, 84%)', 'hsl(233, 14%, 35%)');

  const { task } = useHandleTodo();

  return (
    <Flex direction="column" boxShadow="2xl" bgColor={bg} borderRadius="md">
      {task?.map((tasks) => (
        <Flex
          direction="row"
          align="center"
          bgColor={bg}
          paddingY="10px"
          paddingX="6"
          justify="space-between"
          w="100%"
          fontSize={['16', '18', '18', '18']}
          borderBottom="1px"
          borderColor={border}
          _first={{ borderTopRadius: 'md' }}
          key={tasks.id}
        >
          <Flex direction="row" align="center">
            <IconButton
              aria-label="Completed"
              colorScheme="transparent"
              icon={
                <Icon
                  as={tasks.isComplete ? IoIosCheckmark : IoIosRadioButtonOff}
                  bgGradient={
                    tasks.isComplete
                      ? 'linear(to-br, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
                      : 'none'
                  }
                  color={
                    colorMode === 'light'
                      ? tasks.isComplete
                        ? 'white'
                        : 'hsl(236, 9%, 61%)'
                      : tasks.isComplete
                      ? 'white'
                      : 'hsl(233, 14%, 35%)'
                  }
                  borderRadius="2xl"
                  fontSize="26"
                />
              }
              size="sm"
            />
            <Text
              ml="4"
              color={
                colorMode === 'dark'
                  ? tasks.isComplete
                    ? 'hsl(233, 14%, 35%)'
                    : 'hsl(234, 39%, 85%)'
                  : tasks.isComplete
                  ? 'hsl(236, 9%, 61%)'
                  : 'hsl(235, 19%, 35%)'
              }
              textDecor={tasks.isComplete ? 'line-through' : 'none'}
              _hover={{ cursor: 'pointer' }}
            >
              {tasks.title}
            </Text>
          </Flex>

          <IconButton
            aria-label="Delete"
            icon={
              <Icon
                as={VscChromeClose}
                color={
                  colorMode === 'dark'
                    ? 'hsl(233, 14%, 35%)'
                    : 'hsl(236, 9%, 61%)'
                }
                fontSize="26"
              />
            }
            bgColor="transparent"
            _hover={{ bgColor: '' }}
          />
        </Flex>
      ))}
    </Flex>
  );
}

export default TodoList;
