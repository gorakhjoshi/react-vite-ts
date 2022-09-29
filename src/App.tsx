import TodoComponent from './components/TodoComponent';
import TodoProvider from './context/todoContext';

function App() {
  return (
    <TodoProvider>
      <TodoComponent />
    </TodoProvider>
  );
}

export default App;
