import React from 'react';

const TodoItem = ({ todo, todoIsDone, deleteTodo, changeTodo }) => {
  return (
    <div className="todoItem">
      <div className="todoContent">
        <h3 className='todoTitle'>{todo.title}</h3>
        <p className='todoText'>{todo.text}</p>
      </div>
      <div className="buttonList">
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        <button onClick={() => changeTodo(todo.id)}>
          {todoIsDone === false ? '완료' : '취소'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
