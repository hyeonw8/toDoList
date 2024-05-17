const TodoItem = ({ todo, todos, todoIsDone, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodo = (id) => { 
    setTodos(
      todos.map((todo) => {
          if(todo.id === id) {
            todo.isDone = !todo.isDone;
          }
        return todo;
      })
      // todos.map((todo) =>
      //   todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      // )
    );
    // console.log(todos);
  };
  
  return (
    <div className="todoItem">
      <div className="todoContent">
        <h3 className="todoTitle">{todo.title}</h3>
        <p className="todoText">{todo.text}</p>
      </div>
      <div className="buttonList">
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        <button onClick={() => toggleTodo(todo.id)}>
          {todoIsDone === false ? '완료' : '취소'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
