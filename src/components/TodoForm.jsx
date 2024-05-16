import { useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle === '' || newText === '') {
      alert('제목과 내용을 모두 입력해 주세요!');
      setNewTitle('');
      setNewText('');
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: newTitle,
      text: newText,
      isDone: false,
    };
   // console.log(newTodo);
    setTodos([...todos, newTodo]);
    setNewTitle('');
    setNewText('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="inputTitle"> 제목 </label>
      <input
        type="text"
        placeholder="오늘의 할 일을 적어주세요"
        value={newTitle}
        className="inputTitle"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <label htmlFor="inputContent"> 내용 </label>
      <input
        type="text"
        placeholder="세부 내용을 적어주세요"
        value={newText}
        className="inputContent"
        onChange={(e) => setNewText(e.target.value)}
      />
      <button className='addButton' type="submit"> 추가하기 </button>
    </form>
  );
};

export default TodoForm;
