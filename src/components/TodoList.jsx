import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, todoIsDone, setTodos }) => {
  
  const deleteTodo = (id) => {
    //console.log(id);
    setTodos(
      todos.filter((todo) => {
        //console.log(todo.id, id);
        return todo.id !== id;
      })
    );
  };

  const changeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    // console.log(todos);
  };
  
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
              changeTodo={changeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </div>
    </>
  );
};

export default TodoList;
