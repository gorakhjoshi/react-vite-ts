import TodoProvider from './context/todoContext';

function App() {
  return (
    <TodoProvider>
      <div>Hello</div>
      <div>Hello</div>
      <div>bye</div>
    </TodoProvider>
  );
}

export default App;
