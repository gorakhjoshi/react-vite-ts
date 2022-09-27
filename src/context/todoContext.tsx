import { createContext, ReactNode, useState } from 'react';

interface TodoProviderProps {
  children: ReactNode;
}

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TodoContextProps {
  task: Task[];
  setTask: (value: []) => void;
}

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default function TodoProvider({ children }: TodoProviderProps) {
  const [task, setTask] = useState();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    // We have an issue below. Try to fix it and send Pull Request (PR) to my repo by creating separate branch.
    <TodoContext.Provider value={{ task, setTask }}>
      {children}
    </TodoContext.Provider>
  );
}
