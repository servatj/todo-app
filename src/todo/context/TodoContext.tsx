import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
  todoState: TodoState,
  addTodo: (todo: Todo) => void,
  toogleTodo: (id: string) => void,
  removeTodo: (id: string) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
