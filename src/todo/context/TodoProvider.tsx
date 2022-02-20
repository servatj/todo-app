import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './reducers/todoReducer';
import { TodoContext } from './TodoContext'

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Todo 1',
      completed: false
    },
    {
      id: '2',
      desc: 'Todo 2',
      completed: false
    }
  ],
  completed: 0,
  pending: 2
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toogleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  }

  const removeTodo = (id: string) => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } });
  }

  return (
    <TodoContext.Provider value={{todoState, toogleTodo, removeTodo}}>
      {children}
    </TodoContext.Provider>
  )
};
