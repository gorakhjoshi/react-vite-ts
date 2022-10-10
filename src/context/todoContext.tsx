import { createContext, ReactNode, useEffect, useState } from 'react';

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
  filter: string;
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);

export default function TodoProvider({ children }: TodoProviderProps) {
  const [task, setTask] = useState<Task[]>([]);
  const [filter] = useState('All');

  useEffect(() => {
    const initialTasks = [
      { id: 1, title: 'Complete online JavaScript course', isComplete: true },
      { id: 2, title: 'Jog around the park 3x', isComplete: true },
      { id: 3, title: '10 minutes meditation', isComplete: false },
      { id: 4, title: 'Read for 1 hour', isComplete: false },
      { id: 5, title: 'Pick up groceries', isComplete: false },
      {
        id: 6,
        title: 'Complete Todo App on Frontend Mentor',
        isComplete: false,
      },
    ];

    const tasks = JSON.parse(
      localStorage.getItem('tasks') || JSON.stringify(initialTasks)
    );

    setTask(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TodoContext.Provider value={{ task, setTask, filter }}>
      {children}
    </TodoContext.Provider>
  );
}
