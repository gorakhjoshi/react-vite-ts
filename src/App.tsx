import TodoComponent from './components/TodoComponent';
import TodoProvider from './context/todoContext';

function App() {
  return (
    <TodoProvider>
      <TodoComponent />
      <div>bye</div>
    </TodoProvider>
  );
}

export default App;
