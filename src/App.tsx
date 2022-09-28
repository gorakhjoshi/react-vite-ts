import TodoProvider from './context/todoContext';
import MyComponent from './MyComponent';

function App() {
  return (
    <TodoProvider>
      <MyComponent />
    </TodoProvider>
  );
}

export default App;
