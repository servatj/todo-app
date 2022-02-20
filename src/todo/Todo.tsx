import { TodoProvider } from "./context/TodoProvider"
import { TodoList } from "./components/TodoList"
import { TodoPending } from "./components/TodoPending"
import { TodoForm } from "./components/TodoForm"

export const Todo = () => {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoPending />
      <TodoList />
    </TodoProvider>
  )
}
