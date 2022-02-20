import { useTodos } from "../hooks/useTodos";

export const TodoPending = () => {
  const { pendingTodos } = useTodos();
  return (
    <h2>Pending { pendingTodos }</h2>
  )
}
