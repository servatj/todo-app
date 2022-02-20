import { TodoState, Todo } from '../../interfaces/interfaces';

export type TodoAction =
 | { type: 'ADD_TODO', payload: Todo }
 | { type: 'REMOVE_TODO', payload: { id: string } }
 | { type: 'TOGGLE_TODO', payload: { id: string } }


export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      const todos = state.todos.filter(todo => todo.id !== action.payload.id);
      return {
        ...state,
        todos
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(({...todo}) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
    }
}
