import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces"

interface props {
  todo: Todo
}

export const TodoItem = ({ todo } : props) => {

  const { toogleTodo, removeTodo } = useContext(TodoContext);

  const handleDblClick = () => {
    toogleTodo(todo.id)
  }

  const handleClick = () => {
    removeTodo(todo.id)
  }

  return (
    <li style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : '' }} onDoubleClick={ handleDblClick }>
      {todo.desc} <button onClick={handleClick}>remove</button>
    </li>
  )
}
