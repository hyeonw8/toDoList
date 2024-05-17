const TodoItem = ({ todo, setTodos }) => {
  const { id, title, text, isDone} = todo; // 구조분해 할당
  
  const deleteTodo = (id) => {
    setTodos((prev) =>  prev.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => { 
    setTodos((prev) =>  
      prev.map((todo) => 
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
    // console.log(todos);
  };
  
  return (
    <div className="todoItem">
      <div className="todoContent">
        <h3 className="todoTitle">{title}</h3>
        <p className="todoText">{text}</p>
      </div>
      <div className="buttonList">
        <button onClick={() => deleteTodo(id)}>삭제</button>
        <button onClick={() => toggleTodo(id)}>
          {isDone === false ? '완료' : '취소'}
        </button>
      </div>
    </div>
  );
};


export default TodoItem;
