import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const InputStyle = {
  height: '30px',
  border: 'none',
  padding: '10px',
  fontSize: '14px'
}

export const TodoForm = () => {
  const [value, setValue]  = useState('');
  const { addTodo, todos } = useTodos();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      id: todos.length.toString(),
      desc: value,
      completed: false
    })
  };
  return (
    <form onSubmit={handleSubmit}>
      <input style={InputStyle} type='text' value={value} onChange={onChange}/>
      <button type="submit">Add Todo</button>
    </form>
  );
};
