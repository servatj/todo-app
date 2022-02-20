import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"
interface props {
  todo: Todo
}

export const TodoItem = ({ todo } : props) => {

  const { toogleTodo, removeTodo } = useTodos();

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
