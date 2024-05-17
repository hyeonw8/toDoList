import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newText.trim()) {
      alert('제목과 내용을 모두 입력해 주세요!');
      setNewTitle('');
      setNewText('');
      return;
    }

    const nextTodo = {
      id: Date.now(),
      title: newTitle,
      text: newText,
      isDone: false,
    };
   // console.log(newTodo);
    setTodos((prevTodos) => [...prevTodos, nextTodo]);
    setNewTitle('');
    setNewText('');
  };

  // 비제어 컴포넌트 방식, input 태그에는 name만 적어주면 됨.
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const title = formData.get('title');
  //   const text = formData.get('text');

  //   if(!title.trim() || !text.trim())
  //     return alert('제목과 내용을 입력해주세요!')

  //   const nextTodo = {
  //     id: Date.now(),
  //     title,
  //     text,
  //     isDone: false,
  //   }

  //   console.log('nextTodo >> ', nextTodo);

  //   // useState의 비동기성
  //   setTodos((prevTodos) => [...prevTodos, nextTodo]);
  //   // 맨 앞에 넣어주고 싶으면 [nextTodo, ...prevTodos]
  //   e.target.reset();
  // }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="inputTitle"> 제목 </label>
      <input
        type="text"
        placeholder="오늘의 할 일을 적어주세요"
        value={newTitle}
        //name='title'
        className="inputTitle"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <label htmlFor="inputContent"> 내용 </label>
      <input
        type="text"
        placeholder="세부 내용을 적어주세요"
        value={newText}
        // name='text'
        className="inputContent"
        onChange={(e) => setNewText(e.target.value)}
      />
      <button className='addButton' type="submit"> 추가하기 </button>
    </form>
  );
};

export default TodoForm;
