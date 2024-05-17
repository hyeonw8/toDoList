import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Header from './Header';

const TodoContainer = () => {
  const initialState = [
    {
      id: 0,
      title: '리액트 공부하기',
      text: '리액트 강의 복습하기',
      isDone: false,
    },
    {
      id: 1,
      title: '리액트 과제',
      text: '리액트 과제 제출하기',
      isDone: true,
    },
  ];
  const [todos, setTodos] = useState(initialState);

  return (
    <section>
      <Header />
      <TodoForm setTodos={setTodos} />
      <div className='list'>
        <TodoList todos={todos} setTodos={setTodos} todoIsDone={false} />
        <TodoList todos={todos} setTodos={setTodos} todoIsDone={true} />
      </div>
    </section>
  );
};

export default TodoContainer;
