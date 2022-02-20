import { TodoProvider } from "./context/TodoProvider"
import { TodoList } from "./components/TodoList"
import { TodoPending } from "./components/TodoPending"

export const Todo = () => {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <TodoPending />
      <TodoList />
    </TodoProvider>
  )
}
