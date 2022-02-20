import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
  const { todoState, toogleTodo, removeTodo } = useContext(TodoContext);
  const { todos } = todoState;
  return {
    todos,
    toogleTodo,
    removeTodo,
    pendingTodos: todos.filter(todo => !todo.completed).length,
  };
}
