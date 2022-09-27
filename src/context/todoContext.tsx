import { createContext, ReactNode } from 'react';

interface TodoProviderProprs {
  children: ReactNode;
  //   style: string;
}

const TodoContext = createContext({});

export default function TodoProvider({ children }: TodoProviderProprs) {
  return <TodoContext.Provider value="hello">{children}</TodoContext.Provider>;
}
