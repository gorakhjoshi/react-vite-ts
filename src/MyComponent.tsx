import useHandleTodo from './hooks/useHandleTodo';

function MyComponent() {
  const { task } = useHandleTodo();
  return (
    <div>
      {task.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default MyComponent;
