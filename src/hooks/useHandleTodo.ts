import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';

export default function useHandleTodo() {
  const context = useContext(TodoContext);
  return context;
}
