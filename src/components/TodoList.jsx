import TodoItem from './TodoItem';

const TodoList = ({ todos, todoIsDone, setTodos }) => {
  
  return (
    <>
      <h2 className='stateTitle'>{todoIsDone === false ? 'Working...🔥' : 'Done ✅'}</h2>
      <div className="toDoList">
        {todos
          .filter((todo) => todo.isDone === todoIsDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todoIsDone={todoIsDone}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </div>
    </>
  );
};

export default TodoList;
